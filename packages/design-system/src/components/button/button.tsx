import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@chakra-ui/react';
import { getButtonStyles, Size, Variant } from '../../theme/components/button';
import React from 'react';

export type ButtonProps = Omit<
  BaseButtonProps,
  'variant' | 'size' | 'colorScheme'
> & {
  size?: Size;
  variant?: Variant;
};

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { size = 'md', variant = 'primary', ...rest } = props;
    const styles = getButtonStyles(variant, size);
    return (
      <BaseButton
        ref={ref}
        type="button"
        size={null}
        display="inline-flex"
        bg="transparent"
        {...styles}
        {...rest}
      />
    );
  }
);

export { ButtonGroup } from '@chakra-ui/react';
export type { ButtonOptions, ButtonGroupProps } from '@chakra-ui/react';
