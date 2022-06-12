import {
  Box,
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  List,
  ListItem,
} from '@chakra-ui/react';
import * as React from 'react';
import { useBoolean, useControllable } from '../../hooks';
import { Text } from '../typography';
import { singleSelectMiddleware } from './select.utils';

interface Option {
  value: string;
  label: string;
}

export interface DrawerSelectProps extends Omit<BoxProps, 'onChange'> {
  children: React.ReactElement;
  options: Option[];
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  heading?: string;
}

export const DrawerSelect = (props: DrawerSelectProps) => {
  const {
    options,
    value: valueProp,
    defaultValue,
    onChange,
    heading,
    children,
    ...rest
  } = props;

  const triggerRef = React.useRef(null);
  const [isDrawerOpen, setDrawer] = useBoolean();

  const [value, setValue] = useControllable({
    value: valueProp,
    defaultValue: defaultValue,
    onChange,
  });

  const { getItemValue } = singleSelectMiddleware(options as any[]);

  const onSelectOption = (selectedOption: string) => () => {
    setDrawer.toggle();
    setValue(selectedOption);
  };

  return (
    <>
      <Box ref={triggerRef} onClick={setDrawer.toggle} {...rest}>
        {children}
      </Box>
      <Drawer
        isOpen={isDrawerOpen}
        placement="bottom"
        onClose={setDrawer.off}
        finalFocusRef={triggerRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box mx="auto" py={heading ? 'unset' : 'md'}>
            {heading && (
              <Text mt="lg" size="md" fontWeight="bold" textAlign="center">
                {heading}
              </Text>
            )}
            <DrawerCloseButton
              top="md"
              insetEnd="md"
              border="solid 2px"
              h="1.5rem"
              w="1.5rem"
              boxSizing="unset"
              borderColor="blue.600"
              borderRadius="3px"
              _focus={{ boxShadow: 'unset' }}
            />
          </Box>
          <DrawerBody pt="lg" pb="lg" px="0">
            <List textAlign="center" mb="md">
              {options.map(option => {
                const isSelected = getItemValue(option) === value;
                return (
                  <ListItem
                    key={option.value}
                    onClick={onSelectOption(option.value)}
                    py="sm"
                    cursor="pointer"
                    backgroundColor={isSelected ? 'gray.100' : '#fff'}
                    _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }}
                  >
                    <Text
                      color="gray.800"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                    >
                      {option.label}
                    </Text>
                  </ListItem>
                );
              })}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerSelect;
