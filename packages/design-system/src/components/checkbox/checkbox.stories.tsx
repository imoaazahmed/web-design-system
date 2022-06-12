import { CheckboxGroup, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { withContainer } from '../story-container';
import Checkbox from './checkbox';

export default {
  title: 'CHAKRA/Checkbox',
  decorators: [withContainer],
};

export const checkbox = () => (
  <Stack>
    <Checkbox>Checkbox Out Of group</Checkbox>

    <CheckboxGroup defaultValue={['one']} onChange={console.log}>
      <Checkbox value="one">Checkbox 1</Checkbox>
      <Checkbox value="two">Checkbox 2</Checkbox>
      <Checkbox value="three" isDisabled>
        Checkbox 3 (Disabled)
      </Checkbox>
    </CheckboxGroup>
  </Stack>
);

export const IsIntermediate = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
};
