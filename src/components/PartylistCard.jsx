import { Button, Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'

function PartylistCard({ title, position }) {
  return (
    <>
      <Card className='mt-10 w-[70%]'>
        <div className='flex items-center'>
          <div className='flex items-center gap-3'>
            <h1>{title}</h1>
            {position && <p className='text-gray-400 italic font-sans'>{position}</p>}
          </div>
          <div className='flex items-center ml-auto gap-6 cursor-pointer'>
            <EditOutlined />
            <DeleteOutlined />
          </div>
        </div>
      </Card>
    </>
  )
}
export default PartylistCard
