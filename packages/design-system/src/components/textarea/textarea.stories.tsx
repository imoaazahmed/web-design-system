import React, { useState } from 'react';
import { Textarea } from './textarea';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Textarea',
  decorators: [withContainer],
};

export const basic = () => <Textarea />;

export const InvalidTextarea = () => (
  <>
    <Textarea isInvalid />
    <Textarea mt="lg" _invalid={{ bg: 'red.50' }} isInvalid />
  </>
);

export const disabled = () => (
  <>
    <Textarea isDisabled />
    <Textarea mt="lg" _disabled={{ bg: 'gray.700' }} isDisabled />
  </>
);

export const ControlledInput = () => {
  const [value, setValue] = useState('First Name');
  return <Textarea value={value} onChange={e => setValue(e.target.value)} />;
};
