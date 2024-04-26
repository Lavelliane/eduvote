import React from 'react'

function PartyData({ title, vision, mission, goals }) {
  return (
    <div className='ml-5'>
      <p className='font-sans font-bold text-[20px] mt-6 mb-4'>{title}</p>
      <page className='font-sans font-bold text-[14px] mt-5'>Vision</page>
      <p>{vision}</p>
      <p className='font-sans font-bold text-[14px] mt-5'>Mission</p>
      <p>{mission}</p>
      <p className='font-sans font-bold text-[14px] mt-5'>Goals</p>
      <p>
        {goals.split(',').map((cred) => (
          <li>{cred.trim()}</li>
        ))}
      </p>

      <h2 className='font-sans font-bold text-[20px] mt-7'>Candidates</h2>
    </div>
  )
}

export default PartyData
