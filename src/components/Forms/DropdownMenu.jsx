import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};



const items = [
  {
    label: 'Governor',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Vice Governor',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'Secretary',
    key: '3',
    icon: <UserOutlined />,
    
  },
  {
    label: 'Treasurer',
    key: '4',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: 'Budget',
    key: '5',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: 'Auditor',
    key: '6',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: 'P.I.O',
    key: '7',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: '4th Year Representative',
    key: '8',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: '3rd Year Representative',
    key: '9',
    icon: <UserOutlined />,

    disabled: false,
  },
  {
    label: '2nd Year Representative',
    key: '10',
    icon: <UserOutlined />,

    disabled: false,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const DropdownMenu = () => (
  <Space wrap>
   
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default DropdownMenu;