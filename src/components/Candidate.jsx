'use client'
import PartylistCard from './PartylistCard'
import AddButton from './AddButton'
import { Modal } from 'antd'
import { useState } from 'react'
import AddCandidateForm from './Forms/AddCandidateForm'
import CandidateListCard from '@/components/CandidateListCard'

function Candidate({ name, candidates, partyId }) {
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState({})
  const [trigger, setTrigger] = useState('create')

  const handleFormClose = () => {
    setIsCandidateModalOpen(false)
  }
  const handleFormOpen = () => {
    setIsCandidateModalOpen(true)
  }
  function handleOk() {
    alert('Candidate Created')
  }

  return (
    <>
      <div className='flex  gap-3 items-center mt-3'>
        <h1 className='font-bold '>{name}</h1>
        <AddButton
          buttonName='Add Candidate'
          onClick={() => {
            setIsCandidateModalOpen(true)
            setTrigger('create')
          }}
        />
      </div>
      {candidates.length > 0 && (
        <>
          {candidates.map((candidate, i) => (
            <CandidateListCard
              setTrigger={setTrigger}
              data={candidate}
              key={i}
              title={candidate.name}
              position={candidate.position}
              handleFormOpen={handleFormOpen}
              onSetChoice={(value) => setSelectedCandidate(value)}
            />
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
        <AddCandidateForm
          handleFormClose={handleFormClose}
          partyId={partyId}
          candidateData={selectedCandidate}
          trigger={trigger}
        />
      </Modal>
    </>
  )
}
export default Candidate
