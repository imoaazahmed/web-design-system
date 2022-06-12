import React from 'react';
import { PinInput } from './pin-input';

export default {
  title: 'CHAKRA/Pin Input',
};

export const Basic = () => (
  <PinInput
    defaultValue="12"
    noOfFields={6}
    onComplete={val => {
      alert(val);
    }}
  />
);

export const Controlled = () => {
  const [value, setValue] = React.useState('');
  return (
    <PinInput
      value={value}
      onChange={setValue}
      noOfFields={6}
      onComplete={val => {
        alert(val);
      }}
    />
  );
};
