import { Box } from '@chakra-ui/react';
import React from 'react';
import { FrontMatter } from '../../types';
import { SideBar } from '../components/side-bar';
import { Header } from '../pages';
export default function DocPage({
  children,
  frontMatter,
}: {
  children: React.ReactChild;
  frontMatter: FrontMatter;
}) {
  const HEADERHEIGHT = '70px';
  return (
    <>
      <Box pos="fixed" top="0" insetStart="0" w="100%" bg="white" zIndex={2}>
        <Header />
      </Box>
      <Box
        pos="fixed"
        top={HEADERHEIGHT}
        bottom="0"
        insetStart="0"
        w="300px"
        pt="lg"
        borderEnd="1px solid"
        borderEndColor="gray.200"
        overflow="scroll"
      >
        <SideBar />
      </Box>
      <Box marginStart="300px" mt={HEADERHEIGHT} padding="lg">
        <Box maxW="750px" mx="auto">
          {/* <h1>{frontMatter.title}</h1>
          <h2>{frontMatter.description}</h2> */}
          {children}
        </Box>
      </Box>
    </>
  );
}
