'use client'

import { Button, Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteParty } from '@/lib/queries/mutations/party/deleteParty'

function PartylistCard({ title, position, data, onSetChoice, handleFormOpen, setTrigger }) {
  const queryClient = useQueryClient()
  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteParty,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['parties'] })
    }
  })

  return (
    <>
      <Card className = 'mt-6 w-[100%] '>
        <div className='flex items-center'>
          <div className='flex items-center gap-3'>
            <h1>{title}</h1>
            {position && <p className='text-gray-400 italic font-sans'>{position}</p>}
          </div>
          <div className='flex items-center ml-auto gap-6 cursor-pointer'>
            <Button
              onClick={() => {
                onSetChoice(data)
                setTrigger('edit')
                handleFormOpen()
              }}
              style={{ color: '#00AC4F', border: '2px solid #1DEF6A', backgroundColor: 'rgba(61, 240, 127, 0.2)', borderRadius: '8px' }}
            >Update</Button>
            <Button
              onClick={() => {
                onSetChoice(data)
                console.log(data)
                deleteMutation(data)
              }}
              style={{ color: '#FF6262', border: '2px solid #FF6262', backgroundColor: 'rgba(240, 136, 61, 0.2)', borderRadius: '8px' }}
             
            >Delete</Button>
          </div>
        </div>
      </Card>
    </>
  )
}
export default PartylistCard
