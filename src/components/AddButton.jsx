import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';

const AddButton = ({data, buttonName}) => {
  const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <>
      
        <Flex gap="small" wrap="wrap">
         
          <Button type="primary" shape="round" style={{ backgroundColor: 'rgba(61, 240, 127, 0.2)', padding: '10px', color: '#00AC4F' , width: 'auto', border: '2px solid #1DEF6A', fontSize: '12px' }} icon={<PlusOutlined />} size={size}>
            {buttonName}
          </Button>
          
        </Flex>
      
    </>
  );
};
export default AddButton;