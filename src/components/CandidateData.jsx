import React from 'react';

function CandidateData({ name, position, img_url }) {
  return (
    <div className='font-sans ml-auto'>
      <div className='mt-3 mb-3 flex flex-row'>
        <img src={img_url} alt={name} className='w-32 h-32 rounded-full object-cover '/>
        <div className=' mt-2'>
          <p className='text-sm '>{name}</p>
          <p className='font-semibold text-base'>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateData;
