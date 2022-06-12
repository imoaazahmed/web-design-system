import React from 'react';
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import colors from './colors';
import color from 'color';
import { spaces } from './spacing';
import { Heading, Text } from '../../components';

export default {
  title: 'CHAKRA/Foundations',
};

function Color({ value, code }) {
  const textColor = new color(value).isDark() ? 'white' : 'gray.600';
  return (
    <Box bg={value} padding={5}>
      <Flex justify="space-between" color={textColor}>
        <span>{code}</span>
        <span>{value}</span>
      </Flex>
    </Box>
  );
}

const filter = ['gray', 'blue', 'green', 'orange', 'red', 'yellow'];

export const _colors = () => (
  <SimpleGrid columns={2} spacing={4} maxW="800px" mx="auto">
    {Object.keys(colors).map(name => {
      if (!filter.includes(name)) return;
      const palette = colors[name];
      return (
        <div>
          {Object.keys(palette).map(key => {
            const colorHex = palette[key];
            return <Color key={key} value={colorHex} code={`${name}.${key}`} />;
          })}
        </div>
      );
    })}
  </SimpleGrid>
);

function Space({ value, code }: any) {
  return (
    <Box width={value} bg="pink.200">
      <Flex justify="space-between" width="300px" padding={3}>
        <span style={{ minWidth: 80 }}>{value}</span>
        <span>{`${parseFloat(value) * 16}px`}</span>
        <span>{code}</span>
      </Flex>
    </Box>
  );
}

export const _spacing = () => (
  <SimpleGrid spacing={4} maxW="800px" mx="auto">
    {Object.keys(spaces).map(name => {
      const space = spaces[name];
      return <Space value={space} code={name} />;
    })}
  </SimpleGrid>
);

export const Typography = () => (
  <div>
    <Stack spacing="24px">
      <Heading size="lg">
        <code>{`<Heading size="lg" />`}</code>
      </Heading>

      <Heading>
        <code>{`<Heading />`}</code>
      </Heading>

      <Heading size="sm">
        <code>{`<Heading size="sm" />`}</code>
      </Heading>

      <Text size="lg">
        <code>{`<Text size="lg" />`}</code>
      </Text>

      <Text>
        <code>{`<Text />`}</code>
      </Text>

      <Text size="sm">
        <code>{`<Text size="sm"/>`}</code>
      </Text>

      <Text size="xs">
        <code>{`<Text size="xs"/>`}</code>
      </Text>
    </Stack>
  </div>
);

export const ShadowTest = () => (
  <Box size="400px" boxShadow="100">
    This is a box
  </Box>
);
