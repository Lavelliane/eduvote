'use client'
import { Button, Form, Input } from 'antd'
import AddButton from './AddButton'
import PartylistCard from './PartylistCard'
import { Modal, Spin } from 'antd'
import { useState, useEffect } from 'react'
import AddPartyForm from './Forms/AddPartyForm'
import { getParties } from '@/lib/queries/party/getParty'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Party() {
  const [isAddPartyModalOpen, setIsAddPartyModalOpen] = useState(false)
  const [partyData, setPartyData] = useState({})
  const { data: fetchedParties, isLoading } = useQuery({ queryKey: ['parties'], queryFn: getParties })
  const [trigger, setTrigger] = useState('create')

  return (
    <>
      <Spin spinning={isLoading}>
        <div className='flex gap-3 items-center mt-3'>
          <h1 className='font-bold'>Active Parties</h1>
          <AddButton
            buttonName='Add Party'
            onClick={() => {
              setPartyData({})
              setIsAddPartyModalOpen(true)
              setTrigger('create')
            }}
          />
        </div>
        {fetchedParties && fetchedParties.length > 0 && (
          <>
            {fetchedParties.map((party, i) => (
              <PartylistCard
                setTrigger={setTrigger}
                title={party.name}
                key={i}
                data={party}
                onSetChoice={(value) => setPartyData(value)}
                handleFormOpen={() => setIsAddPartyModalOpen(true)}
              />
            ))}
          </>
        )}
      </Spin>
      <Modal title='Add Party' open={isAddPartyModalOpen} footer={null} onCancel={() => setIsAddPartyModalOpen(false)}>
        <AddPartyForm handleModalClose={() => setIsAddPartyModalOpen(false)} data={partyData} trigger={trigger} />
      </Modal>
    </>
  )
}
export default Party;
