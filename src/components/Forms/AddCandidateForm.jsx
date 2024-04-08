import { positions, yearLevels } from '@/constants'
import { Form, Input, Select } from 'antd'

function AddCandidateForm() {
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete='off'
    >
      <Form.Item name={['user', 'name']} label='Name' rules={[{ required: true, message: 'Please enter name' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'Positon']}
        label='Position'
        rules={[{ required: true, message: 'Please select year level' }]}
      >
        <Select options={positions} />
      </Form.Item>

      <Form.Item
        name={['user', 'yearLevel']}
        label='Year Level'
        rules={[{ required: true, message: 'Please select year level' }]}
      >
        <Select options={yearLevels} />
      </Form.Item>

      <Form.Item
        name={['user', 'Credential']}
        label='Credential'
        rules={[{ required: true, message: 'Please enter the advocacy' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name={['user', 'advocacy']}
        label='Advocacy'
        rules={[{ required: true, message: 'Please enter the advocacy' }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default AddCandidateForm
