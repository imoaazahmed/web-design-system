import React from 'react';
import { Menu as ChakraMenu, MenuProps } from '@chakra-ui/react';
export const Menu = (props: MenuProps) => {
  const { placement = 'bottom-start' } = props;

  return <ChakraMenu {...props} placement={placement} />;
};

export type {
  MenuProps,
  MenuButtonProps,
  MenuCommandProps,
  MenuDividerProps,
  MenuGroupProps,
  MenuItemProps,
  MenuItemOptionProps,
  MenuListProps,
  MenuOptionGroupProps,
  UseMenuProps,
  UseMenuReturn,
  UseMenuButtonProps,
  UseMenuItemProps,
  UseMenuListProps,
  UseMenuOptionProps,
  UseMenuOptionGroupProps,
} from '@chakra-ui/react';

export {
  MenuButton,
  MenuCommand,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  MenuProvider,
  useMenu,
  useMenuButton,
  useMenuItem,
  useMenuState,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
} from '@chakra-ui/react';
