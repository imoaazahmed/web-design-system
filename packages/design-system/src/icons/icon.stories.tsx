import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import {
  CATEGORY_ICONS,
  CATEGORY_ICON_NAMES,
  FILE_ICONS,
  GlobeIcon,
  GroupIcon,
  HelpIcon,
  MoneyIcon,
} from '.';
import { FramedIcon } from '../components/index';
import { HOME_BANNER_ICONS, BadgeIconFrame } from './home-page-banner';
import { withContainer } from '../components/story-container';

export default {
  title: 'CHAKRA/Icon',
  decorators: [withContainer],
};

function ForwardProps({
  children,
  displayName: displayNameProp,
  ...props
}: any) {
  return React.Children.map(children, child => {
    const { displayName, name } = child.type;
    const _displayName = displayNameProp ?? displayName ?? name;
    return (
      <Stack
        align="center"
        fontFamily="SF Mono"
        fontSize="sm"
        key={_displayName}
      >
        {React.cloneElement(child, props)}
        <Box>{`<${_displayName} />`}</Box>
      </Stack>
    );
  });
}

export const TopNavIcons = () => (
  <SimpleGrid columns={4}>
    <ForwardProps boxSize="40px">
      <GroupIcon />
      <MoneyIcon />
      <HelpIcon />
      <GlobeIcon />
    </ForwardProps>
  </SimpleGrid>
);

/**
 * Icons for the homepage banners.
 *
 * @maradona Ensure you use the <BadgeIconFrame/> component as well
 * coz it renders the shape around the icon
 */
export const HomePageBanner = () => (
  <SimpleGrid columns={4} spacing="40px">
    {Object.values(HOME_BANNER_ICONS).map((Icon, index) => (
      <ForwardProps key={index} displayName={Icon.displayName}>
        <BadgeIconFrame>
          <Icon />
        </BadgeIconFrame>
      </ForwardProps>
    ))}
  </SimpleGrid>
);

/**
 * Here's the icon only implementation,
 * we'll use this to review the icons in the future
 */
export const CategoryIcons = () => (
  <SimpleGrid columns={3} spacing="40px">
    {CATEGORY_ICON_NAMES.map(name => {
      const CategoryIcon = CATEGORY_ICONS[name];
      return (
        <Stack align="center" fontFamily="SF Mono" fontSize="sm" key={name}>
          <CategoryIcon boxSize="40px" />
          <Box mt="sm">{`<${CategoryIcon.name} />`}</Box>
        </Stack>
      );
    })}
  </SimpleGrid>
);

/**
 * Here's a quick grid for each icon,
 * I'm using the `FramedIcon` component to contain
 * it in a circle. So you can simply copy the code :)
 */
export const CategoryIconsWithFrame = () => (
  <SimpleGrid columns={4} spacing="40px">
    {CATEGORY_ICON_NAMES.map(name => {
      const CategoryIcon = CATEGORY_ICONS[name];
      return (
        <Stack align="center" fontFamily="SF Mono" fontSize="sm" key={name}>
          <FramedIcon
            icon={<CategoryIcon />}
            size="64px"
            iconSize="40px"
            bg="blue.800"
            color="white"
          />
          <Box>{`<${CategoryIcon.name} />`}</Box>
        </Stack>
      );
    })}
  </SimpleGrid>
);

export const fileIcons = () => (
  <SimpleGrid columns={4} spacing="40px">
    {Object.values(FILE_ICONS).map((Icon, index) => (
      <ForwardProps size="40px" key={index}>
        <Icon />
      </ForwardProps>
    ))}
  </SimpleGrid>
);
