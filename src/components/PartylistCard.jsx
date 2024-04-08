'use client'

import { Button, Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { deleteParty } from '@/lib/queries/mutations/party/deleteParty'

function PartylistCard({ title, position, data, onSetChoice, handleFormOpen }) {

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteParty,
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries({ queryKey: ['parties'] })
    // }
  })

  return (
    <>
      <Card className='mt-6 w-[70%]'>
        <div className='flex items-center'>
          <div className='flex items-center gap-3'>
            <h1>{title}</h1>
            {position && <p className='text-gray-400 italic font-sans'>{position}</p>}
          </div>
          <div className='flex items-center ml-auto gap-6 cursor-pointer'>
            <EditOutlined onClick={() => {
              onSetChoice(data)
              handleFormOpen()
            }} />
            <DeleteOutlined  onClick={() => {
              onSetChoice(data)
              console.log(data)
              deleteMutation(data)
            }} />
          </div>
        </div>
      </Card>
    </>
  )
}
export default PartylistCard
