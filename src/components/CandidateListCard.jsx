'use client'
import { Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCandidate } from '@/lib/mutations/candidate/candidateMutations'
import { Button} from 'antd'

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
      <Card className='mt-6 w-auto mb-4'>
        <div className='flex items-center'>
          <div className='flex items-center gap-3'>
            <h1 className=''>{title}</h1>
            {position && <p className='text-gray-400 italic font-sans '>{position}</p>}
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
                deleteCandidateMutation(data)
              }}
              style={{ color: '#FF6262', border: '2px solid #FF6262', backgroundColor: 'rgba(240, 136, 61, 0.2)', borderRadius: '8px' }}
            >Delete</Button>
          </div>
        </div>
      </Card>
    </>
  )
}
