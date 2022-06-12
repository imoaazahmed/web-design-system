import { Flex, FlexProps, IconProps } from '@chakra-ui/react';
import React from 'react';

export type FramedIconProps = FlexProps & {
  /**
   * Custom icon to use, must be a valid react element
   * @example
   * ```jsx
   * <FramedIcon icon={<FoodIcon/>} />
   * ```
   */
  icon: React.ReactElement;
  /**
   * The size of the icon
   */
  iconSize?: IconProps['w'];
  size?: IconProps['w'];
};

export const FramedIcon = (props: FramedIconProps) => {
  const {
    icon,
    iconSize = '40%',
    bg = 'gray.100',
    size = '40px',
    ...rest
  } = props;

  return (
    <Flex
      bg={bg}
      boxSize={size}
      display="flex"
      align="center"
      flexShrink={0}
      justify="center"
      borderRadius="100%"
      {...rest}
    >
      {React.cloneElement(icon, { boxSize: iconSize })}
    </Flex>
  );
};

export default FramedIcon;
