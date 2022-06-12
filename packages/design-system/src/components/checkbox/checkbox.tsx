import { CheckboxProps, Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import React from 'react';
import checkbox from '../../theme/components/checkbox';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props: CheckboxProps, ref) {
    return (
      <ChakraCheckbox
        sx={{
          '.chakra-checkbox__control': { ...checkbox.baseStyles },
        }}
        {...props}
      />
    );
  }
);

export type {
  CheckboxGroupContext,
  CheckboxGroupProps,
  UseCheckboxGroupProps,
  CheckboxProps,
  UseCheckboxProps,
} from '@chakra-ui/react';

export { CheckboxGroup } from '@chakra-ui/react';

export default Checkbox;
