'use client'
import { Button, Form, Input } from 'antd'
import AddButton from './AddButton'
import PartylistCard from './PartylistCard'
import { Modal } from 'antd'
import { useState } from 'react'

function Party({ parties }) {
  const [isAddPartyModalOpen, setIsAddPartyModalOpen] = useState(false)

  function handleCancel() {
    setIsAddPartyModalOpen(false)
  }

  function handleOk(values) {
    console.log('Form values:', values)
    // You can add form submission logic here
    setIsAddPartyModalOpen(false)
  }

  return (
    <>
      <div className='flex gap-3 items-center mt-3'>
        <h1 className='font-bold'>Active Parties</h1>
        <AddButton buttonName='Add Party' onClick={() => setIsAddPartyModalOpen(true)} />
      </div>
      {parties.length > 0 && (
        <>
          {parties.map((party, i) => (
            <PartylistCard title={party.name} key={i} />
          ))}
        </>
      )}
      <Modal title='Add Party' open={isAddPartyModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item
            label='Party Name'
            name='partyName'
            rules={[{ required: true, message: 'Please input party name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='Vision' name='vision' rules={[{ required: true, message: 'Please input vision!' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label='Mission' name='mission' rules={[{ required: true, message: 'Please input mission!' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label='Goals' name='goals' rules={[{ required: true, message: 'Please input goals!' }]}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default Party
