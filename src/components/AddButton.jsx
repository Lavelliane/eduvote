import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Divider, Flex, Radio } from 'antd'

const AddButton = ({ data, buttonName, onClick }) => {
  const [size, setSize] = useState('large') 
  return (
    <>
    <div className='ml-auto'>
    <Flex gap='small' wrap='wrap'  >
      <Button
  onClick={onClick}
  style={{
    backgroundColor: '#0053F3', 
    padding: '10px',
    color: 'white', 
    width: 'auto',
    // border: '2px solid #05C3EC',
    fontSize: '12px',
    font: 'bold'
  }}
  icon={<PlusOutlined />}
  size={size}
>
  {buttonName}
</Button>


      </Flex>
    </div>
      
    </>
  )
}
export default AddButton
