'use client'

import { Form, Input, Button } from 'antd'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createParty } from '@/lib/queries/party/createParty'
import { useEffect } from 'react'
import { updateParty } from '@/lib/queries/mutations/party/updateParty'

const { useForm } = Form

function AddPartyForm({ handleModalClose, data, trigger }) {
  const queryClient = useQueryClient()
  const createMutation = useMutation({
    mutationFn: createParty,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['parties'] })
    }
  })
  const { mutate: updateMutation } = useMutation({
    mutationFn: updateParty,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['parties'] })
    }
  })
  const [partyForm] = useForm()

  const onFinish = (values) => {
    // console.log(data.id)
    if (trigger === 'edit') {
      updateMutation({ ...values, id: data.id })
      handleModalClose()
    } else {
      createMutation.mutate(values)
      handleModalClose()
    }
  }

  useEffect(() => {
    if (data && trigger === 'edit') {
      partyForm.setFieldsValue({
        name: data.name || '', // Set initial value for 'name' field
        vision: data.vision || '', // Set initial value for 'vision' field
        mission: data.mission || '', // Set initial value for 'mission' field
        goals: data.goals || '' // Set initial value for 'goals' field
      })
    } else {
      partyForm.resetFields()
    }
  }, [data, partyForm])

  return (
    <Form form={partyForm} name='party-form' onFinish={onFinish} style={{ maxWidth: '500px', margin: 'auto' }}>
      <Form.Item
        label={<span style={{ color: 'black' }}>Party Name</span>}
        name='name'
        rules={[{ message: 'Please input party name!' }]}
      >
        <Input style={{ width: '100%', borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: 'black' }}>Vision</span>}
        name='vision'
        rules={[{ required: true, message: 'Please input vision!' }]}
      >
        <Input.TextArea style={{ width: '100%', borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: '', fontWeight: 'bold' }}>Mission</span>}
        name='mission'
        rules={[{ required: true, message: 'Please input mission!' }]}
      >
        <Input.TextArea style={{ width: '100%', borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: 'black' }}>Goals</span>}
        name='goals'
        rules={[{ required: true, message: 'Please input goals!' }]}
      >
        <Input.TextArea style={{ width: '100%', borderRadius: '5px' }} />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' style={{ width: '100%', borderRadius: '5px', backgroundColor: '#3DF07F' }}>
          {trigger === 'edit' ? 'Edit Party' : 'Create Party'}
        </Button>
      </Form.Item>
    </Form>
  )
}
export default AddPartyForm
