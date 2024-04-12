import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParties } from '@/lib/queries/party/getParty'
import { useRouter } from 'next/navigation'
import { CircleHelp } from 'lucide-react'

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
  getItem('Contact us', '/contact-us', <CircleHelp size={20} color="#7C8DB5" />),
  getItem('Log out', '/sign-out', <CircleHelp size={20} color="#7C8DB5" />)
]
export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const { data: parties, isLoading } = useQuery({ queryKey: ['parties'], queryFn: getParties })

  function handleNavigate(item){
    console.log(item)
    router.push(item.key)
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
    getItem('Dashboard', '/dashboard', <CircleHelp size={20} color="#7C8DB5" />),
    getItem(
      'Candidates',
      'sub1',
      <CircleHelp size={20} color="#7C8DB5" />,
      generateCandidatesMenuItems(parties)
    ),
    getItem('Vote', '/vote', <CircleHelp size={20} color="#7C8DB5" />),
    getItem('Admin', '/admin', <CircleHelp size={20} color="#7C8DB5" />)
  ]
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
          items={items1}
          style={{ backgroundColor: 'white' }}
          className='font-sans pt-9'
          onClick={handleNavigate}
        />

        {/* Second Menu */}
        <Menu
          defaultSelectedKeys={['0']}
          mode='inline'
          items={items2}
          style={{ backgroundColor: 'white' }}
          className='pt-80 font-sans'
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
