import { Box, BoxProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  usePopover,
  UsePopoverProps,
  UsePopoverReturnType,
} from './use-popover';

const PopoverContext = React.createContext({} as UsePopoverReturnType);
const usePopoverContext = () => useContext(PopoverContext);

export interface PopoverV2Props extends BoxProps, UsePopoverProps {}

export const PopoverV2 = (props: PopoverV2Props) => {
  const { children } = props;
  const context = usePopover(props);
  return (
    <PopoverContext.Provider value={context}>
      {children}
    </PopoverContext.Provider>
  );
};

export const PopoverTriggerV2: React.FC = props => {
  const { children } = props;
  const child = React.Children.only(children) as JSX.Element;
  const { getTriggerProps } = usePopoverContext();
  return React.cloneElement(child, getTriggerProps(child.props));
};

export const PopoverContentV2 = React.forwardRef(
  (props: BoxProps, ref: React.Ref<any>) => {
    const { getContentProps } = usePopoverContext();
    const boxProps = getContentProps({ ...(props as any), ref }) as BoxProps;
    return <Box as="section" mx="auto" {...boxProps} />;
  }
);

export const PopoverArrowV2 = React.forwardRef(
  (props: BoxProps, ref: React.Ref<any>) => {
    const { getArrowProps } = usePopoverContext();
    const arrowProps = getArrowProps({ ...(props as any), ref });
    return <Box {...arrowProps} />;
  }
);
