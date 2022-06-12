import {
  Box,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { Drawer, DrawerContent } from './drawer';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '../button';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Drawer',
  decorators: [withContainer, withKnobs],
};

export const Drawer2 = () => {
  return <Box>Drawer 2</Box>;
};

export const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" marginEnd={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue" marginEnd={3}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
