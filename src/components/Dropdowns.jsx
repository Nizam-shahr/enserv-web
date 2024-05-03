import React from 'react';
import { Select } from 'antd';
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const Dropdowns = () => (
  <Select
  className='select'
    labelInValue
    defaultValue={{
      value: '1',
      label: 'January',
    }}
    style={{
      width: 100,
     
      outline:'none'
    }}
    variant='borderless'
    onChange={handleChange}
    options={[
      {
        label: 'January',
        value: '1',
      },
      {
        label: 'February',
        value: '2',
      },
      {
        label: 'March',
        value: '3',
      },
      {
        label: 'April',
        value: '4',
      },
      {
        label: 'May',
        value: '5',
      },
      {
        label: 'June',
        key: '6',
      },
      {
        label: 'July',
        value: '7',
      },
      {
        label: 'August',
        value: '8',
      },
      {
        label: 'September',
        value: '9',
      },
      {
        label: 'October',
        value: '10',
      },
      {
        label: 'November',
        value: '11',
      },
      {
        label: 'December',
        key: '12',
      },
    ]}
  />
);
export default Dropdowns;

  
 
 
