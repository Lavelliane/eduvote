'use client'

import AddButton from './AddButton'
import PartylistCard from './PartylistCard'
import { Modal } from 'antd'
import { useState } from 'react'

function Party({ parties }) {
  //array destructuring
  const [isAddPartyModalOpen, setIsAddPartyModalOpen] = useState(false)
  function handleCancel() {
    setIsAddPartyModalOpen(false)
  }
  function handleOk() {
    alert('FORM IS SUBMITTED')
  }
  return (
    <>
      <div className='flex  gap-3 items-center mt-3'>
        <h1 className='font-bold '>Active Parties</h1>
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
        <p>FORM HERE</p>
      </Modal>
    </>
  )
}
export default Party
