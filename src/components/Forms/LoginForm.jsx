'use client'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Cookies from 'js-cookie'

const LoginForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false)
  const onFinish = async (values) => {
    try {
      setIsSigningIn(true)
      let res = await signIn('credentials', {
        ...values,
        callbackUrl: '/dashboard',
        redirect: true
      })
      setIsSigningIn(false)
      console.log('success')
    } catch (e) {
      console.error(e)
    }
  }

  const [loginForm] = Form.useForm()

  return (
    <div className='mt-10'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        form={loginForm}
      >
        <h1 className='font-sans mb-3 font-normal'>Email</h1>
        <Form.Item
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
            placeholder='Username'
            style={{ height: '40px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRaduis: '10px' }}
          />
        </Form.Item>
        <h1 className='font-sans mb-3'>Password</h1>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon mr-3' />}
            type='password'
            placeholder='Password'
            style={{ height: '40px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRaduis: '10px' }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={isSigningIn}
            htmlType='submit'
            className='bg-[#3DF07F] hover:bg-[#3c8858] hover:border-gray-300 text-white w-[100%] py-5 flex items-center justify-center'
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
