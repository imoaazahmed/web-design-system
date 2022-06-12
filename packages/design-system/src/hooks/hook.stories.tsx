import React from 'react';
import { useCheckbox } from './use-checkbox';

export default {
  title: 'CHAKRA/Hooks',
};

export const CheckboxHook = () => {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(
    {}
  );
  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} />
      <div
        {...getCheckboxProps({
          style: {
            background: state.isChecked ? 'red' : 'white',
            color: state.isHovered ? 'tomato' : 'black',
          },
        })}
      >
        Checkbox
      </div>
    </label>
  );
};
