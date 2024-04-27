import React from 'react'
import './globals.css'

export default function Home() {
  return (
    <div className='font-sans'>
      <header className='flex items-center justify-between sticky top-0 bg-white shadow-md z-10 h-20'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>
            <img src='edulogo.svg' alt='logo' className='w-28 h-28' />
          </div>
          <div>
            <ul className='flex items-center gap-[4vw]'>
              <li className=''>
                <a href='' className='hover:text-green-700'>
                  Home
                </a>
              </li>
              <li>
                <a href='' className='hover:text-green-700'>
                  About
                </a>
              </li>
              <li>
                <a href='' className='hover:text-green-700'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className='border border-stone-900 px-6 py-2 rounded-2xl text-[#615A5A] bg-gradient-to-r '>
              Sign in
            </button>
          </div>
        </nav>
      </header>

      <section className='mt-40'>
        <div className='flex items-center justify-center flex-col gap-6 mt-16'>
          <p className='text-5xl font-extrabold text-center'>
            <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-green-500'>
              Every decision
            </span>{' '}
            you make <br /> carries the power{' '}
          </p>
          <p className='text-center text-[#575151]'>
            Welcome to our voting platform where every vote counts, empowering <br />
            you to make a difference in shaping our community's future.
          </p>
          <button className='bg-black px-6 py-3 text-white rounded-md text-xs hover:bg-emerald-400'>Get Started</button>
        </div>

        <div className='my-24 ml-10 flex-row mt-32'>
          <div className='flex gap-3 mt-36'>
            <div>
              <a href=''>
                <img src='face.svg' alt='facebook' />
              </a>
            </div>
            <div>
              <a href=''>
                <img src='instagram.svg' alt='instagram' />
              </a>
            </div>
            <div>
              <a href=''>
                <img src='twitter.svg' alt='twitter' />
              </a>
            </div>
            <div>
              <a href=''>
                <img src='link.svg' alt='linkedin' />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-center mb-32'>
        <div className='flex flex-col gap-24 max-w-5xl w-full justify-center items-center px-8 xl:px-0 '>
          <div className='w-full flex flex-col md:flex-row justify-evenly items-center md:items-start gap-6'>
            

            <div className='max-w-lg flex flex-col gap-4'>
              <h1 className='text-xl md:text-3xl'>Revolutionizing the Voting Experience</h1>

              <p className='text-sm md:text-base font-light'>
                We believe that the traditional methods of voting are due for a transformation. By leveraging the latest
                advancements in technology, we're reshaping the way people participate in elections, referendums, and
                decision-making processes. Our goal is not just to improve upon existing systems, but to fundamentally
                redefine what it means to cast a vote in the modern age.
              </p>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row justify-evenly items-center md:items-start gap-6 pt-30'>
            <div className='max-w-lg flex flex-col gap-4'>
              <h1 className='text-xl md:text-3xl'>Empowering Participation</h1>

              <p className='text-sm md:text-base font-light'>
                We're on a mission to break down barriers to participation and make the democratic process more
                inclusive than ever before. Whether you're a busy professional, a person with disabilities, or living in
                a remote area, our platform ensures that you have a voice in shaping the future of your community and
                country.
              </p>
            </div>
          
          </div>

          <div className='w-full flex flex-col md:flex-row justify-evenly items-center md:items-start gap-6'>
           

            <div className='max-w-lg flex flex-col gap-4'>
              <h1 className='text-xl md:text-3xl'>Ensuring Every Vote Counts</h1>

              <p className='text-sm md:text-base font-light'>
                In a world where trust in institutions is paramount, we're committed to ensuring the integrity of every
                vote cast through our platform. From robust security measures to transparent auditing processes, we
                leave no stone unturned in our quest to uphold the sanctity of the democratic process.
              </p>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row justify-evenly items-center md:items-start gap-6 pt-30'>
            <div className='max-w-lg flex flex-col gap-4'>
              <h1 className='text-xl md:text-3xl'>Building a Better Future</h1>

              <p className='text-sm md:text-base font-light'>
                At the heart of our endeavor lies a vision of a better future—a future where democracy is not just a
                concept, but a living, breathing reality for all. By revolutionizing the voting experience, we're laying
                the groundwork for a more equitable, inclusive, and just society for generations to come.
              </p>
            </div>
           
          </div>

          <div className='text-center text-[#575151] mt-8 mb-30'>
            <p className='font-italic'>
              Join us in this journey as we redefine democracy for the digital age. Together, let's build a world where
              every voice matters and every vote truly counts.
            </p>
          </div>
        </div>
      </section>
       <img src="backgroun.svg" alt="background" />
      <h1 className='text-center text-2xl font-semibold mb-10'>Key Features</h1>

      <div className='flex justify-center  '>
        <div className='flex items-center gap-6'>
          <p className='text-xs border border-lime-400 px-4 py-4 rounded-xl'>
            <img src='end.svg' alt='end' className='mr-2 inline-block align-middle' />
            End-to-End Encryption
          </p>
          <p className='text-xs border border-lime-400 px-4 py-4 rounded-xl'>
            <img src='user.svg' alt='user' className='mr-2 inline-block align-middle' />
            User-Friendly Interface
          </p>
          <p className='text-xs border border-lime-400 px-4 py-4 rounded-xl'>
            <img src='audit.svg' alt='audit' className='mr-2 inline-block align-middle' />
            Auditable Results
          </p>
          <p className='text-xs border border-lime-400 px-4 py-4 rounded-xl'>
            <img src='comp.svg' alt='comp' className='mr-2 inline-block align-middle' />
            Comprehensive Accessibility
          </p>
        </div>
      </div>

      <section className='mt-52'>
        <h1 className='text-center text-[#2F5442] text-3xl font-semibold'>How It Works</h1>
        <p className='text-center mt-4 text-[#3B3737]'>
          Follow these steps to vote. Register securely <br /> using your personal information and cast your ballot{' '}
          <br /> easily from any internet-enabled device.
        </p>

        <div className='flex mt-32 justify-evenly'>
          <div className='border border-[#E6EDFF] max-w-sm px-8 py-6 rounded-xl'>
            <h1 className='text-center mb-3 font-semibold'>Registration</h1>
            <p className='text-center'>
              Follow these steps to vote. Register securely using your personal information and cast your ballot easily
              from any internet-enabled device.
            </p>
          </div>
          <div className='flex items-center'>
            <img src='line1.svg' alt='line' />
          </div>
          <div className='border border-[#E6EDFF] max-w-sm px-8 py-6 rounded-xl'>
            <h1 className='text-center mb-3 font-semibold'>Authentication</h1>
            <p className='text-center'>
              Verify your identity through our multi- factor authentication system, guaranteeing the integrity of the
              voting process.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src='center.svg' alt='center' className=' align-middle' />
        </div>

        <div className='flex mt-18 justify-evenly'>
          <div className='border border-[#E6EDFF] max-w-sm px-8 py-6 rounded-xl'>
            <h1 className='text-center mb-3 font-semibold'>Registration</h1>
            <p className='text-center'>
              Follow these steps to vote. Register securely using your personal information and cast your ballot easily
              from any internet-enabled device.
            </p>
          </div>
          <div className='flex items-center'>
            <img src='line1.svg' alt='line' />
          </div>
          <div className='border border-[#E6EDFF] max-w-sm px-8 py-6 rounded-xl'>
            <h1 className='text-center mb-3 font-semibold'>Authentication</h1>
            <p className='text-center'>
              Verify your identity through our multi- factor authentication system, guaranteeing the integrity of the
              voting process.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-30'>
        <h1>hah</h1>
      </section>
    </div>
  )
}
