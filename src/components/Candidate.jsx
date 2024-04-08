'use client'
import PartylistCard from './PartylistCard'
import AddButton from './AddButton'
import { Modal } from 'antd'
import { useState } from 'react'
import AddCandidateForm from './Forms/AddCandidateForm'

function Candidate({ name, candidates }) {
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false)

  function handleOk() {
    alert('Candidate Created')
  }

  return (
    <>
      <div className='flex  gap-3 items-center mt-3'>
        <h1 className='font-bold '>{name}</h1>
        <AddButton buttonName='Add Candidate' onClick={() => setIsCandidateModalOpen(true)} />
      </div>
      {candidates.length > 0 && (
        <>
          {candidates.map((candidate, i) => (
            <PartylistCard key={i} title={candidate.name} position={candidate.position} />
          ))}
        </>
      )}
      <Modal
        title='Add Candidate'
        footer={null}
        open={isCandidateModalOpen}
        onOk={handleOk}
        onCancel={() => setIsCandidateModalOpen(false)}
      >
        <AddCandidateForm />
      </Modal>
    </>
  )
}
export default Candidate
