import { Layout, Menu, theme } from 'antd'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParties } from '@/lib/queries/party/getParty'
import { useRouter } from 'next/navigation'
import { CircleHelp, Phone, LogOut, CircleCheck, Gauge, Users, ShieldCheck } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}

const items2 = [
  getItem('Help Centre', '/help', <CircleHelp size={20} color="#7C8DB5" />),
  getItem('Contact us', '/contact-us', <Phone size={20} color="#7C8DB5" />),
  getItem('Log out', '/sign-out', <LogOut size={20} color="#FF7074"/>)
]
export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const { data: parties, isLoading } = useQuery({ queryKey: ['parties'], queryFn: getParties })
  const { data: session, status } = useSession()
  function handleNavigate(item){
    console.log(item)
    if(item.key === '/sign-out'){
      console.log(item.key)
      signOut().then((res) => console.log(res))
      router.push('/login')
    }else{
      console.log(item)
      router.push(item.key)
    }
  }

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  function generateCandidatesMenuItems(parties) {
    if (!parties || isLoading) {
      return null // Return null or loading indicator if parties are still loading
    }

    return parties.map((party) => getItem(party.name, `/candidates/${party.id}`)) // Generate menu items from fetched parties
  }

  const items1 = [
    getItem('Dashboard', '/dashboard', <Gauge size={20} color="#7C8DB5" />),
    getItem(
      'Candidates',
      'sub1',
      <Users size={20} color="#7C8DB5" />,
      generateCandidatesMenuItems(parties)
    ),
    getItem('Vote', '/vote', <CircleCheck size={20} color="#7C8DB5" />)
  ]

  const itemsAdmin = [
    getItem('Dashboard', '/dashboard', <Gauge size={20} color="#7C8DB5" />),
    getItem(
      'Candidates',
      'sub1',
      <Users size={20} color="#7C8DB5" />,
      generateCandidatesMenuItems(parties)
    ),
    getItem('Vote', '/vote', <CircleCheck size={20} color="#7C8DB5" />),
    getItem('Admin', '/admin', <ShieldCheck size={20} color="#7C8DB5" />)
  ]

  useEffect(() => {
    if(status === "unauthenticated"){
      router.push('/login')
    }
    console.log(session)
  }, [session, status])

  return (
    <Layout className='h-screen bg-[#FAFBFC] flex-wrap'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: 'white' }}
        className='text-[#7C8DB5] w-[200px]'
      >
        <img className='pt-14 pl-4 w-32 h-34 self-center z-3' src='edulogo.svg' alt='logo-eduvote' />
        <div className='demo-logo-vertical' />

        {/* First Menu */}
        <Menu
          defaultSelectedKeys={['1']}
          mode='inline'
          items={session && session?.user?.role === 'ADMIN' ? itemsAdmin: items1}
          style={{ backgroundColor: 'white', color: '#7C8DB5' }}
          className='font-sans pt-9 text-[#7C8DB5]'
          onClick={handleNavigate}
        />

        {/* Second Menu */}
        <Menu
          defaultSelectedKeys={['0']}
          mode='inline'
          items={items2}
          style={{ backgroundColor: 'white' }}
          className='pt-80 font-sans'
          onClick={handleNavigate}
        />
        <style>
          {`
            .ant-menu-item-selected {
              background-color: transparent !important;
            }

            .ant-layout-sider-trigger {
              display: none !important;
            }

           
            
          `}
        </style>
      </Sider>

      <Layout>
        <Header
          style={{
            height: 90,
            padding: 0,
            background: colorBgContainer
          }}
        />

        <Content
          style={{
            margin: '0 16px'
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
        >
          ©{new Date().getFullYear()} LSU
        </Footer>
      </Layout>
    </Layout>
  )
}
