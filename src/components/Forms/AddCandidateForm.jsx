import { positions, yearLevels } from '@/constants'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCandidate, updateCandidate } from '@/lib/mutations/candidate/candidateMutations'
import { useEffect } from 'react'
import { omit } from 'lodash'

function AddCandidateForm({ handleFormClose, partyId, candidateData, trigger }) {
  const queryClient = useQueryClient()
  const { mutate: createCandidateMutation } = useMutation({
    mutationFn: createCandidate,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['candidates'] })
    }
  })

  const { mutate: updateCandidateMutation } = useMutation({
    mutationFn: updateCandidate,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['candidates'] })
    }
  })

  const [candidateForm] = useForm()

  useEffect(() => {
    if (candidateData && trigger === 'edit') {
      //omit img_url for now
      candidateForm.setFieldsValue(candidateData)
    } else {
      candidateForm.resetFields()
    }
  }, [candidateData, candidateForm])
  const handleSubmit = (values) => {
    if (trigger === 'create') {
      createCandidateMutation({ ...values, party_id: partyId })
    } else {
      updateCandidateMutation({ ...values, id: candidateData.id })
    }
    handleFormClose()
  }

  return (
    
    <Form
      name='candidate-form'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete='off'
      form={candidateForm}
      onFinish={handleSubmit}
    >
      <Form.Item name='name' label='Name' rules={[{ required: true, message: 'Please enter name' }]}>
        <Input />
      </Form.Item>

      <Form.Item name='position' label='Position' rules={[{ required: true, message: 'Please select year level' }]}>
        <Select options={positions} />
      </Form.Item>

      <Form.Item name='year' label='Year Level' rules={[{ required: true, message: 'Please select year level' }]}>
        <Select options={yearLevels} />
      </Form.Item>

      <Form.Item name='course' label='Course' rules={[{ required: true, message: 'Please enter the advocacy' }]}>
        <Input />
      </Form.Item>

      <Form.Item name='age' label='Age' rules={[{ required: true, message: 'Please input age' }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item
        name='credentials'
        label='Credential'
        rules={[{ required: true, message: 'Please enter the advocacy' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name='advocacy' label='Advocacy' rules={[{ required: true, message: 'Please enter the advocacy' }]}>
        <Input.TextArea />
      </Form.Item>
      <Button htmlType='submit' type='primary'>
        {trigger === 'create' ? 'Add Candidate' : 'Update Candidate'}
      </Button>
    </Form>
  )
}

export default AddCandidateForm
