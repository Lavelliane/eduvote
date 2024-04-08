import DropdownMenu from './DropdownMenu'
import { Form, Input, Row, Col } from 'antd'

const itemYearLevel = [
  {
    label: 'First Year',
    key: '1',
   
  },
  {
    label: 'Second Year',
    key: '2',
   
  },
  {
    label: 'Third Year',
    key: '3',
    
  },
  {
    label: 'Fourth Year',
    key: '4',
   
  },
]

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
        <DropdownMenu />
      </Form.Item>

      <Form.Item
        name={['user', 'yearLevel']}
        label='Year Level'
        rules={[{ required: true, message: 'Please select year level' }]}
      >
        <DropdownMenu />
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
