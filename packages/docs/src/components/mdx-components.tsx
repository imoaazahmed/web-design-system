import { Alert, Kbd } from '@chakra-ui/react';
import {
  Button,
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from '@tradeling/web-design-system';
import { Box, BoxProps, Code, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import { LiveProviderProps } from 'react-live';
import CodeBlock from './code-block';

const Pre = (props: BoxProps) => <Box my="2em" rounded="sm" {...props} />;

const Table = (props: BoxProps) => (
  <Box as="table" textAlign="start" mt="32px" width="full" {...props} />
);

const THead = (props: BoxProps) => {
  const { colorMode } = useColorMode();
  const bg = { light: 'gray.50', dark: 'whiteAlpha.100' };
  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      padding={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props: BoxProps) => (
  <Box
    as="td"
    padding={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const Link = forwardRef((props, ref: any) => (
  <Box
    as="a"
    ref={ref}
    color="teal.500"
    cursor="pointer"
    textDecoration="underline"
    outline="none"
    _hover={{ opacity: 0.8 }}
    _focus={{ boxShadow: 'outline' }}
    {...props}
  />
));

const DocsHeading = (props: HeadingProps) => (
  <Heading
    mb="md"
    mt="lg"
    css={{
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="teal.500"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: 'outline' }}
          opacity={0}
          marginStart="2xs"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading as="h1" size="lg" my="1em" {...props}></Heading>
  ),
  h2: (props: HeadingProps) => (
    <DocsHeading
      as="h2"
      fontWeight="semibold"
      size="lg"
      {...props}
    ></DocsHeading>
  ),
  h3: (props: HeadingProps) => (
    <DocsHeading as="h3" size="md" fontWeight="medium" {...props}></DocsHeading>
  ),
  inlineCode: (props: BoxProps) => (
    <Code
      colorScheme="yellow"
      fontSize="0.84em"
      fontFamily="Inter"
      {...props}
    />
  ),
  code: (props: LiveProviderProps) => <CodeBlock {...props} />,
  pre: Pre,
  kbd: Kbd,
  br: (props: BoxProps) => <Box height="24px" {...props} />,
  hr: (props: BoxProps) => (
    <Box as="hr" borderTopWidth="1px" my={8} {...props} />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: ({ href, ...props }: BoxProps & { href: string }) => (
    <NextLink href={href} passHref>
      <Link {...props} />
    </NextLink>
  ),
  p: (props: TextProps) => (
    <Text as="p" marginTop={4} lineHeight="tall" {...props} />
  ),
  ul: (props: BoxProps) => (
    <Box as="ul" paddingTop="xs" paddingStart="md" {...props} />
  ),
  ol: (props: BoxProps) => (
    <Box as="ol" paddingTop="xs" paddingStart="md" {...props} />
  ),
  li: (props: BoxProps) => <Box as="li" paddingBottom="2xs" {...props} />,
  blockquote: (props: BoxProps) => (
    <Alert
      role="none"
      mt={4}
      variant="left-accent"
      status="warning"
      css={{ '> *:first-of-type': { marginTop: 0 } }}
      {...props}
    />
  ),
  Button: Button,
};

export default MDXComponents;
