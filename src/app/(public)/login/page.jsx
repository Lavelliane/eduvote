import React from 'react'


function LoginPage() {
  return (
    <div>
  <div className='flex flex-col rounded-2xl justify-center items-center '>
    <div className='w-[30%] p-6 ml-20 rounded-2xl border-[#E6EDFF] solid border mb-30'>
      <p className='font-sans text-[#32403B] text-2xl font-semibold mb-4'>Log in</p>
      <p className='font-sans text-[#32403B] mt-4'>
        Please sign in to your HNU email to access the <br /> voting system.
      </p>
      <button className='flex items-center justify-center text-[#32403B] border-[#E6EDFF] solid border font-semibold py-4 px-4 mt-16 w-full font-sans rounded-lg hover:bg-[#3DF07F] hover:border-gray-300 hover:text-white'>
  <img src="google.svg" alt="Google Icon" className="w-5 h-5 mr-2" />
  Sign in with Google
</button>


    </div>
    <div>
      <img src="survey.svg" alt="survey" className='' />
    </div>
  </div>
</div>

  )
}

export default LoginPage
