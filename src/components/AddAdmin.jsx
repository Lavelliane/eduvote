'use client'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import React from 'react'
import axios from 'axios'

const RegisterForm = () => {
  const [api, contextHolder] = notification.useNotification()
  const onFinish = async (values) => {
    try {
      const data = {
        ...values,
        role: 'ADMIN',
        hasVoted: true
      }
      const user = await axios.post('/api/user/register', data)
      if (user.data) {
        api['success']({
          message: 'Registration Successful',
          description: 'Admin account successfully added'
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  const [registerForm] = Form.useForm()

  return (
    <>
      {contextHolder}
      <div className='mt-10 flex justify-center'>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          form={registerForm}
          layout='vertical'
          requiredMark={false}
        >
          <Form.Item
            label='Full Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your name'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon mr-3' />}
              placeholder='Full Name'
              style={{ height: '40px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRaduis: '10px', width: '100%', fontStye: 'bold' }}
            />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon mr-3' />}
              placeholder='Email'
              style={{ height: '40px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRaduis: '10px', width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon mr-3' />}
              placeholder='Password'
              style={{ height: '40px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRaduis: '10px', width: '100%'}}
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType='submit'
              className='bg-[#3DF07F] hover:bg-[#3c8858] hover:border-gray-300 text-white w-[100%] py-5 flex items-center justify-center'
            >
              Add Admin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default RegisterForm
