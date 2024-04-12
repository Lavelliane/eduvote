// import React from 'react';
// import { Radio } from 'antd';

// const RadioType = ({ yearLevel, value }) => (
//   <Radio value={value} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>
//     {yearLevel}
//   </Radio>
// );

// export default RadioType;

import React, { useState } from 'react'
import { Radio } from 'antd'
const App = () => {
  const [value, setValue] = useState(1)
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <Radio.Group onChange={onChange} value={value}>
      <div className='flex flex-row '>
        <div className='mr-3'>
          
          <Radio value={1} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>First Year</Radio>
        </div>
        <div>
         
          <Radio value={2} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>Second Year</Radio>
        </div>
      </div>

      <div className='flex flex-row mt-7'>
        <div className='mr-3'>
          
          <Radio value={3} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>Third Year</Radio>
        </div>
        <div>
          
          <Radio value={4} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>Fourth Year</Radio>
        </div>
      </div>
    </Radio.Group>
  )
}
export default App
