import React from 'react';


function PartyData({ title, vision, mission, goals }) {
  return (
    <div>
      <p className='font-sans font-bold text-[20px]'>{title}</p>
      <page className='font-sans font-bold text-[14px] mt-5'>Vision</page>
      <p>{vision}</p>
      <p className='font-sans font-bold text-[14px] mt-5'>Mission</p>
      <p>{mission}</p>
      <p className='font-sans font-bold text-[14px] mt-5'>Goals</p>
      <p>{goals}</p>

      <h2 className='font-sans font-bold text-[20px]'>Candidates</h2>


    </div>
  );
}

export default PartyData;
