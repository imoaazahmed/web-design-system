import React from 'react';
import { Avatar, AvatarPresence } from '.';
import { Stack } from '@chakra-ui/react';
import { withContainer } from '../story-container';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CHAKRA/Avatar',
  decorators: [withContainer, withKnobs],
};

const kamran =
  'https://pbs.twimg.com/profile_images/1121742565584375809/ntY8wHL6_400x400.png';
const majd = 'https://ca.slack-edge.com/TP32QM08Y-USK0AM681-465984d54fe8-512';

export const basic = () => (
  <>
    <Stack isInline>
      <Avatar size="lg">
        <AvatarPresence
          variant={select('variant', ['online', 'offline'], 'online')}
        />
      </Avatar>
      <Avatar size="lg" name={text('name', 'Kamran Ahmed')}>
        <AvatarPresence
          variant={select('variant', ['online', 'offline'], 'offline')}
        />
      </Avatar>
      <Avatar size="lg" src={kamran} name={text('name', 'Kamran Ahmed')} />
    </Stack>

    <Stack isInline mt="30px">
      <Avatar>
        <AvatarPresence
          variant={select('variant', ['online', 'offline'], 'online')}
        />
      </Avatar>
      <Avatar name={text('name', 'Majd')}>
        <AvatarPresence
          variant={select('variant', ['online', 'offline'], 'offline')}
        />
      </Avatar>
      <Avatar src={majd} name={text('name', 'Majd')} />
    </Stack>
  </>
);
