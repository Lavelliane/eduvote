import React, { useState } from 'react'
import { Button, Modal } from 'antd'

const ViewMore = ({ img_url, name, position, age, advocacy, course, credentials }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button onClick={showModal} style={{ border: 'none', color: '#00AC4F' }}>
        View Profile
      </Button>
      <Modal title='Profile' visible={isModalOpen} footer={null} onCancel={handleCancel}>
        <div className='mt-3 mb-3 flex flex-col items-center justify-center text-center'>
          <img src={`/avatars/${img_url}`} alt={name} className='w-32 h-32 rounded-full object-cover' />
          <div className='mt-2'>
            <p className='text-sm'>{name}</p>
            <p className='font-semibold text-base'>{position}</p>
          </div>
        </div>
        <div>
          <h5 className='font-semibold text-base font-sans'>Age</h5>
          <p className='text-sm'>{age}</p>
          <h5 className='font-semibold mt-3 text-base'>Course</h5>
          <p className='text-sm'>{course}</p>
          <h5 className='font-semibold mt-3 text-base'>Credentials</h5>
          <ul className='mt-2'>
            {credentials.split(',').map((cred) => (
              <li>{cred.trim()}</li>
            ))}
          </ul>
          <div className='bg-lime-50 p-3 rounded-lg justify mt-6 mb-6'>
            <h5 className='font-semibold text-base mb-4 font-italic'>Advocacy</h5>
            <p className='text-sm'>{advocacy}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ViewMore
