import React, { ReactElement } from 'react';
import { Button, StatusBadge } from '@tradeling/web-design-system';
import {
  Text,
  Heading,
  Link as ChakraLink,
  Box,
  FlexProps,
  Flex,
  Image,
  IconButton,
  SimpleGrid,
  BoxProps,
} from '@chakra-ui/react';
import { SiStorybook, SiGithub } from 'react-icons/si';
// @ts-ignore
import TradelingLogo from './../../assets/images/logo.svg';
import { GITHUB_LINK, STORY_BOOK_LINK } from '../utils/links';
import { FiArrowRight } from 'react-icons/fi';
import Homepage_data from '../static/homepage.json';

const LinkWrapper = (props: { link?: string; children: ReactElement }) => {
  const { link, children } = props;

  if (link) {
    return (
      <ChakraLink href={link} _hover={{ textDecor: 'none' }}>
        {children}
      </ChakraLink>
    );
  }
  return <>{children}</>;
};

export const Header = () => (
  <Flex
    borderBottom="1px solid"
    borderColor="gray.200"
    px="lg"
    py="md"
    width="100%"
    alignItems="center"
    justifyContent="space-between"
  >
    <img src={TradelingLogo} width="120px" height="auto" />
    <Box>
      <a href="/docs">
        <Button variant="primary-next" marginEnd="sm">
          Getting started
        </Button>
      </a>
      <a href={GITHUB_LINK} target="_blank">
        <IconButton
          marginEnd="sm"
          icon={<SiGithub />}
          aria-label="Github"
          size="lg"
          maxH="40px"
          variant="outline"
        />
      </a>
      <a href={STORY_BOOK_LINK} target="_blank">
        <IconButton
          color="#ff4785"
          icon={<SiStorybook />}
          maxH="40px"
          aria-label="Storybook"
          size="lg"
          variant="outline"
        />
      </a>
    </Box>
  </Flex>
);

const PageContainer = (props: BoxProps) => (
  <Box {...props} w="92%" maxW="1220px" m="auto" />
);

const TopBanner = () => {
  return (
    <SimpleGrid columns={2} spacing="lg" alignItems="center" py="lg">
      <Box>
        <Heading size="lg" mb="lg">
          Design, develop, deliver
        </Heading>
        <Heading size="sm" fontWeight="regular">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Heading>
      </Box>
      <Box>
        <Image src="https://atlassian.design/static/b08cf97c98b1a5197f00fba41a1ec8f0/93195/homepage%402x.png" />
      </Box>
    </SimpleGrid>
  );
};

type HorizontalCardProps = FlexProps & {
  imageUrl?: string;
  title: string;
  badgeBg?: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
};

const HorizontalCard = (props: HorizontalCardProps) => {
  const { imageUrl, title, description, link, badgeBg = '', ...rest } = props;

  return (
    <Flex
      bg="white"
      {...rest}
      alignItems="center"
      borderRadius="10px"
      overflow="hidden"
    >
      {imageUrl && (
        <Flex
          flex="0 0 40%"
          bg="gray.100"
          alignSelf="stretch"
          alignItems="center"
        >
          <Image src={imageUrl} />
        </Flex>
      )}
      <Box px="xl">
        <Heading size="sm" mb="md">
          <StatusBadge
            variant="success"
            marginEnd="sm"
            verticalAlign="middle"
            bg={badgeBg ? badgeBg : 'blue.700'}
            color="white"
          >
            C
          </StatusBadge>
          {title}
        </Heading>
        <Text size="lg" fontWeight="400" mb="md">
          {description}
        </Text>
        {link && (
          <ChakraLink color="blue.500" href={link.url}>
            {link.text}
            <Box
              as={FiArrowRight}
              display="inline-block"
              verticalAlign="middle"
              marginStart="sm"
            />
          </ChakraLink>
        )}
      </Box>
    </Flex>
  );
};

const ExploreOurDesignSystem = () => {
  const { ExploreOurDesignSystem } = Homepage_data;
  return (
    <Box bg="blue.700" py="xl">
      <PageContainer>
        <SimpleGrid columns={2} spacing="lg">
          {ExploreOurDesignSystem.map(ele => (
            <HorizontalCard
              imageUrl={ele.imageUrl}
              title={ele.title}
              description={ele.description}
              link={ele.link}
            />
          ))}
        </SimpleGrid>
      </PageContainer>
    </Box>
  );
};

type MainCardProps = BoxProps & {
  icon?: {
    color?: string;
    text?: string;
    url?: string;
  };
  title: string;
  description: string;
  link?: string;
};

const MainCard = (props: MainCardProps) => {
  const { icon, title, description, link } = props;
  return (
    <Box
      boxShadow="0 1px 1px rgba(9,30,66,0.25), 0 0 1px 0 rgba(9,30,66,0.31)"
      borderRadius="4px"
      transition="box-shadow 0.3s ease"
      _hover={{
        boxShadow:
          '0 8px 16px -4px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)',
      }}
      bg="white"
    >
      <LinkWrapper link={link}>
        <Box padding="lg">
          {icon && (
            <Flex
              size="48px"
              bg={icon.color ?? 'blue.700'}
              align="center"
              justify="center"
              color="white"
              mb="lg"
              padding="sm"
            >
              {icon.url ? <Image src={icon.url} /> : icon.text}
            </Flex>
          )}
          <Heading fontWeight="400" mb="sm">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
      </LinkWrapper>
    </Box>
  );
};

const OneMainSection = (props: BoxProps) => {
  return (
    <Flex py="xl" borderBottom="1px solid" borderColor="gray.200" {...props}>
      <Box flex="0 0 35%">
        <HorizontalCard
          bg="none"
          title="Brand"
          description="Our brand reflects who we are and how we want our users to feel when they use our products."
          link={{
            text: 'Explore our Brand',
            url: '/docs/getting-started',
          }}
        />
      </Box>
      <SimpleGrid columns={3} spacing="md">
        <MainCard
          icon={{ color: 'blue.700', text: 'x' }}
          title="Mission"
          description="Our mission is to unleash the potential in every team. "
        />
        <MainCard
          icon={{ color: 'blue.700', text: 'x' }}
          title="Personality"
          description="Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values."
        />
        <MainCard
          icon={{ color: 'blue.700', text: 'v' }}
          title="Promise"
          description="Our promise is that our tools and practices will help teams work better together in an agile, open, and scalable way."
        />
      </SimpleGrid>
    </Flex>
  );
};

const ResourcesSection = () => {
  const { resources } = Homepage_data;

  return (
    <Box>
      <Box textAlign="center" mb="lg">
        <Heading mb="md">{resources.title}</Heading>
        <Text size="lg" fontWeight="400">
          {resources.description}
        </Text>
      </Box>
      <SimpleGrid columns={3} spacing="lg">
        {resources.items.map(ele => (
          <MainCard
            icon={ele.icon}
            title={ele.title}
            description={ele.description}
            link={ele.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default function HomePage() {
  return (
    <Box>
      <Header />
      <PageContainer>
        <TopBanner />
      </PageContainer>
      <ExploreOurDesignSystem />
      <Box bg="gray.50">
        <PageContainer>
          <OneMainSection />
          <OneMainSection borderBottomWidth="0px" />
        </PageContainer>
      </Box>
      <Box bg="gray.100" py="xl">
        <PageContainer>
          <ResourcesSection />
        </PageContainer>
      </Box>
    </Box>
  );
}
