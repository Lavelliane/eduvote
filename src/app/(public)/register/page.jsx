'use client'
import React from 'react'
import RegisterForm from '@/components/Forms/RegisterForm'
import Link from 'next/link'

function RegisterPage() {
  return (
    <div className='relative h-screen'>
      <div className='flex flex-col rounded-3xl justify-center items-center relative z-10'>
        <div className='w-[34%] p-6 ml-20 rounded-[30px] border-[#E6EDFF] solid border mb-30 px-14 py-10 bg-white'>
          <p className='font-sans text-[#20115B] text-2xl font-semibold mb-4'>Sign Up</p>
          <p className='font-sans text-[#32403B] mt-4'>
            Please sign in to your HNU email to access the <br /> voting system. Already have an account?{' '}
            <Link href='/login' className='font-semibold cursor-pointer text-[#3DF07F]'>
              Login Here
            </Link>
          </p>
          <RegisterForm />
        </div>
      </div>

      <div className='absolute inset-0 z-0 mt-20'>
        <img src='bgLogin.svg' alt='survey' className='' />
      </div>
    </div>
  )
}

export default RegisterPage
