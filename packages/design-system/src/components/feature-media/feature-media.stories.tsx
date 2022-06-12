import React from 'react';
import FeatureMedia from './featured-media';
import { FramedIcon } from '../framed-icon';
import { FiPackage, FiList, FiBell } from 'react-icons/fi';
import { Stack } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Feature Media',
};

export const featureMedia = () => (
  <FeatureMedia
    media={
      <FramedIcon
        bg="green.500"
        color="white"
        icon={<FiPackage />}
        size="64px"
        iconSize="40px"
      />
    }
  >
    <FeatureMedia.Title>Find trading partners and products</FeatureMedia.Title>
    <FeatureMedia.Text>
      Find verified regional and global sellers and MENA Buyers. Browse a
      variety of products curated by our industry experts
    </FeatureMedia.Text>
  </FeatureMedia>
);

const data = [
  {
    icon: FiPackage,
    iconBg: 'green.500',
    title: 'Find trading partners and products',
    subtitle:
      'Find verified regional and global sellers and MENA Buyers. Browse a variety of products curated by our industry experts',
  },
  {
    icon: FiList,
    iconBg: 'red.500',
    title: 'Communicate with ease',
    subtitle: 'Send enquiries and manage messages and quotations',
  },
  {
    icon: FiBell,
    iconBg: 'yellow.500',
    title: 'Close Deals with confidence',
    subtitle:
      'Track your orders, use our trusted partner services and receive dependable customer service ',
  },
];

export const FeaturedMediaList = () => (
  <Stack spacing="40px" mb="20px">
    {data.map(({ title, iconBg, icon: Icon, subtitle }) => (
      <FeatureMedia
        key={title}
        media={
          <FramedIcon
            icon={<Icon />}
            bg={iconBg}
            color="white"
            size="64px"
            iconSize="40px"
          />
        }
      >
        <FeatureMedia.Title>{title}</FeatureMedia.Title>
        <FeatureMedia.Text>{subtitle}</FeatureMedia.Text>
      </FeatureMedia>
    ))}
  </Stack>
);
