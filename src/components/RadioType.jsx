import React from 'react';
import { Radio } from 'antd';

const RadioType = ({ yearLevel, value }) => (
  <Radio value={value} style = {{ border: '1px solid #E0E0E0', padding: '16px',  borderRadius: '16px', width:'300px', marginBottom: '16px'}}>
    {yearLevel}
  </Radio>
);

export default RadioType;

