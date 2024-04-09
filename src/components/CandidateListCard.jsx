'use client'
import { Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCandidate } from '@/lib/mutations/candidate/candidateMutations'

export default function CandidateListCard({ onSetChoice, data, handleFormOpen, title, position, setTrigger }) {
  const queryClient = useQueryClient()
  const { mutate: deleteCandidateMutation } = useMutation({
    mutationFn: deleteCandidate,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['candidates'] })
    }
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
            <EditOutlined
              onClick={() => {
                onSetChoice(data)
                setTrigger('edit')
                handleFormOpen()
              }}
            />
            <DeleteOutlined
              onClick={() => {
                deleteCandidateMutation(data)
              }}
            />
          </div>
        </div>
      </Card>
    </>
  )
}
