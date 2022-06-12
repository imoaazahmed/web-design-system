import React from 'react';
import {
  Box,
  Button,
  ChakraLink,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  LinkProps,
  ButtonProps,
} from '@tradeling/web-design-system';
import { OrangeCheckMarkIcon } from './orange-check-mark-icon';

type BulletPointsProps = ModuleData.Components.Schemas.Bulletpoints;

type BulletPointButtonProps = ButtonProps &
  LinkProps & {
    text: string;
  };

const BulletPointButton = ({ text, ...rest }: BulletPointButtonProps) => {
  if (!text) return null;

  return (
    <Button px="xl" size="md" mt="xl" variant="primary-next" {...rest}>
      {text}
    </Button>
  );
};

export function BulletPoints({ content }: BulletPointsProps) {
  const {
    title = '',
    subtitle = '',
    subtitle2 = '',
    bulletpoints,
    cta,
  } = content ?? {};
  const { text = '', href = '' } = cta ?? {};

  if (!bulletpoints?.length) return null;

  const handleScroll = () => {
    const element = document.getElementById('cms-contactUs');
    element?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  return (
    <Flex
      bg="gray.100"
      w="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py={['xl', '2xl']}
      px="lg"
    >
      {!!title && (
        <Heading as="h1" color="blue.700" textAlign="center" size="md">
          {title}
        </Heading>
      )}

      {!!subtitle && (
        <Text textAlign="center" color="gray.900" mt="md">
          {subtitle}
        </Text>
      )}

      {!!subtitle2 && (
        <Text textAlign="center" color="gray.900" mt="xs">
          {subtitle2}
        </Text>
      )}

      <Wrap spacing="14px" maxW={['100%', '900px']} mt="xl" justify="center">
        {bulletpoints.map(point => (
          <WrapItem key={point} w={['inherit', 'calc(50% - 14px)']}>
            <Text
              color="gray.900"
              textAlign="center"
              maxW={['280px', '100%']}
              fontSize="lg"
            >
              <Box
                as="span"
                boxSize="14px"
                mt="3px"
                display="inline-block"
                me="xs"
              >
                <OrangeCheckMarkIcon />
              </Box>
              {point}
            </Text>
          </WrapItem>
        ))}
      </Wrap>
      {href ? (
        <BulletPointButton
          text={text}
          as={ChakraLink}
          target="_blank"
          href={href}
        />
      ) : (
        <BulletPointButton text={text} onClick={handleScroll} />
      )}
    </Flex>
  );
}
