import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from './menu';
import { withKnobs } from '@storybook/addon-knobs';
import { withContainer } from '../story-container';
import { Box } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Menu',
  decorators: [withContainer, withKnobs],
};

export const MenuSample = () => {
  return (
    <Box>
      <Box h="200px" />
      <Menu>
        <MenuButton>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
