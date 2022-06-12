import React, { createContext, useContext } from 'react';
import { Text, TextProps } from '../typography';
import { Stack, StackProps } from "@chakra-ui/react";

type VariantSizeType = 'sm' | 'md' | 'lg';
type DescriptionProps = StackProps & {
  variant?: VariantSizeType;
  isInline?: boolean;
};
type descriptionContextType = {
  size: VariantSizeType;
};

const DescriptionContext = createContext<descriptionContextType>({
  size: 'md',
});
const useDescriptionContext = () => useContext(DescriptionContext);

export const DescriptionLabel = (props: TextProps) => {
  const { size } = useDescriptionContext();
  const textSize = size === 'lg' ? 'md' : 'sm';
  return <Text as="dt" size={textSize} {...props} />;
};

export const DescriptionValue = (props: TextProps) => {
  const { size } = useDescriptionContext();
  return <Text as="dd" size={size} {...props} />;
};

export const Description = (props: DescriptionProps) => {
  const { variant = 'md', isInline, children, ...rest } = props;
  return (
    <DescriptionContext.Provider value={{ size: variant }}>
      <Stack
        as="dl"
        align={isInline ? 'center' : 'unset'}
        isInline={isInline}
        {...rest}
      >
        {' '}
        {children}{' '}
      </Stack>
    </DescriptionContext.Provider>
  );
};
