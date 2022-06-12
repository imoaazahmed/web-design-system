import React from 'react';
import sidebarJson from '../static/sidebar.json';
import { Flex, Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const SideBar = () => {
  const router = useRouter();

  return (
    <Flex direction="column">
      {sidebarJson.map((item: any) => {
        const isCurrent = router.pathname.includes(item.route);
        if (!item.route) {
          return (
            <Box mt="lg" mb="xs" px="lg" key={item.text}>
              <Text
                textTransform="uppercase"
                color="gray.400"
                fontWeight="bold"
              >
                {item.text}
              </Text>
            </Box>
          );
        }
        return (
          <ChakraLink
            key={item.text}
            py="xs"
            px="lg"
            mb="xs"
            bg={isCurrent ? 'orange.500' : ''}
            color={isCurrent ? 'white' : 'black'}
            onClick={() =>
              router.push(`/docs/${item.route}`, undefined, { shallow: true })
            }
            _hover={{
              textDecor: 'none',
              paddingStart: isCurrent ? undefined : 'xl',
            }}
          >
            {item.text}
          </ChakraLink>
        );
      })}
    </Flex>
  );
};
