import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withContainer } from '../story-container';
import { Flex, Link, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { Tooltip, TooltipProps } from './tooltip';
import { Button } from '../button';
import { Heading, Text } from '../typography';
import { Box } from '@chakra-ui/layout';

export default {
  title: 'CHAKRA/Tooltip',
  decorators: [withContainer, withKnobs],
};

const tooltipHeader: TooltipProps['header'] = 'Inspection service';
const tooltipLabel: TooltipProps['label'] =
  'A comprehensive range of world-leading inspection and verification services.';

const TooltipLink = () => {
  return (
    <Flex justifyContent="flex-end" mt="xs">
      <Link
        href="https://www.tradeling.com"
        style={{ textDecoration: 'none' }}
        target="_blank"
        color="blue.700"
        _active={{ color: 'blue.700' }}
        px={0}
        minHeight="unset"
        position="relative"
        border="none"
        transition="border-width 0.6s linear"
        css={{
          ':hover::after': {
            right: '100%',
          },
        }}
        _hover={{ bg: 'transparent' }}
        _after={{
          borderColor: 'blue.700',
          borderTop: '1px solid',
          content: 'close-quote',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          transition: 'right .3s ease',
        }}
      >
        Learn More
      </Link>
    </Flex>
  );
};

const tooltipPlacement = {
  auto: 'auto',
  'auto-start': 'auto-start',
  'auto-end': 'auto-end',
  top: 'top',
  'top-start': 'top-start',
  'top-end': 'top-end',
  bottom: 'bottom',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  right: 'right',
  'right-start': 'right-start',
  'right-end': 'right-end',
  left: 'left',
  'left-start': 'left-start',
  'left-end': 'left-end',
};
const variants = {
  Default: null,
  Light: 'light',
  Dark: 'dark',
};

const booleanValues = {
  Yes: true,
  No: false,
};

export const tooltip = () => {
  return (
    <VStack spacing="md">
      <Flex>
        <Box>
          <UnorderedList spacing={'md'}>
            <ListItem>
              <Heading size="sm">
                <label>Label</label>
              </Heading>
              <Text>
                <b>Default: </b>
                <i>null</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>"string"</i>
              </Text>
            </ListItem>
            <ListItem>
              <Heading size="sm">placement</Heading>
              <Text>
                <b>Default: </b>
                <i>auto</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>"{Object.keys(tooltipPlacement).join('" | "')}"</i>
              </Text>
            </ListItem>
            <ListItem>
              <Heading size="sm">
                <label>header</label>
              </Heading>
              <Text>
                <b>Default: </b>
                <i>null</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>"string"</i>
              </Text>
            </ListItem>
            <ListItem>
              <Heading size="sm">
                <label>variant</label>
              </Heading>
              <Text>
                <b>Default: </b>
                <i>"light"</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>"light" | "dark"</i>
              </Text>
            </ListItem>
            <ListItem>
              <Heading size="sm">
                <label>hasCloseButton</label>
              </Heading>
              <Text>
                <b>Default: </b>
                <i>false</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>boolean</i>
              </Text>
            </ListItem>
            <ListItem>
              <Heading size="sm">
                <label>hasArrow</label>
              </Heading>
              <Text>
                <b>Default: </b>
                <i>true</i>
              </Text>
              <Text>
                <b>Type: </b>
                <i>boolean</i>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <VStack pt="md" pb="4xl">
        <Tooltip
          placement={
            select(
              'Placement',
              tooltipPlacement,
              'auto'
            ) as TooltipProps['placement']
          }
          header={text('Header', tooltipHeader)}
          label={text('Label', tooltipLabel)}
          variant={select('variant', variants, null) as TooltipProps['variant']}
          hasCloseButton={!!select('hasCloseButton', booleanValues, false)}
          hasArrow={!!select('hasArrow', booleanValues, true)}
        >
          <Button>Tooltip V2 without link</Button>
        </Tooltip>
        <Tooltip
          placement={
            select(
              'Placement',
              tooltipPlacement,
              'auto'
            ) as TooltipProps['placement']
          }
          header={text('Header', tooltipHeader)}
          label={text('Label', tooltipLabel)}
          actionItem={<TooltipLink />}
          variant={select('variant', variants, null) as TooltipProps['variant']}
          hasCloseButton={!!select('hasCloseButton', booleanValues, false)}
          hasArrow={!!select('hasArrow', booleanValues, true)}
        >
          <Button>Tooltip V2 with link</Button>
        </Tooltip>
      </VStack>
    </VStack>
  );
};
