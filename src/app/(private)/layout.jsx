'use client'
import React, { useState } from 'react';
import '../globals.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items1 = [
  getItem('Dashboard', '1', <img className="w-4 h-4" src="chart.svg" alt="chart" /> ),
  getItem('Candidates', 'sub1', <img className="w-4 h-4" src="candidates.svg" alt="chart" />, [
    getItem('Atup', '3'),
    getItem('DibDib', '4'),
  ]),
  getItem('Vote', '9', <img className="w-4 h-4" src="voters.svg" alt="chart" />),
];

const items2 = [
  getItem('Help Centre', '2', <img className="w-4 h-4" src="help-center.svg" alt="chart" />),
  getItem('Contact us', '3', <img className="w-4 h-4" src="contactus.svg" alt="chart" />),
  getItem('Log out', '4', <img className="w-4 h-4" src="logout.svg" alt="chart"  />),
];

const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='h-screen bg-[#FAFBFC]'>
      
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: 'white' }} className='text-[#7C8DB5] w-[200px]'>
        <img className='pt-14 pl-4 w-32 h-34 self-center' src="edulogo.svg" alt="logo-eduvote" />
        <div className="demo-logo-vertical" />
        
        {/* First Menu */}
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items1} style={{ backgroundColor: 'white' }} className='font-sans pt-9' />

        {/* Second Menu */}
        <Menu defaultSelectedKeys={['']} mode="inline" items={items2} style={{ backgroundColor: 'white',  }} className='pt-80 font-sans' />
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
            background: colorBgContainer,
          }}
          
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
             
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
