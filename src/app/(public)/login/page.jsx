import React from 'react'

function LoginPage() {
  return (
    <div className=''>
      <div className='flex justify-center items-center rounded-2xl'>
        <div className='border-solid w-[50%] bg-white shadow-md p-6 z-10 rounded-2xl'>
          <p className='font-sans text-[#32403B] text-2xl font-semibold mb-4'>Log in</p>
          <p className='font-sans text-[#32403B]'>
            Please sign in to your HNU email to access the <br /> voting system.
          </p>
          <button className=' text-[#32403B] border-[#E6EDFF] solid border font-semibold py-4 px-4 mt-4 w-full font-sans rounded-lg'>
            Sign in with Google
          </button>
        </div>
      </div>

      <img src='shape1.svg' alt='shape' className='' />
    </div>
  )
}

export default LoginPage
