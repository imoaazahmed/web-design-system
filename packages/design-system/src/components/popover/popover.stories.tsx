import { Box, Flex } from '@chakra-ui/react';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from './popover';
import {
  PopoverV2,
  PopoverArrowV2,
  PopoverContentV2,
  PopoverTriggerV2,
} from './popover-v2';
import React from 'react';
import { Button } from '../button';
import { usePopover } from './use-popover';

export default {
  title: 'CHAKRA/Popover',
  // decorators: [withContainer],
};

export const Basic = () => {
  const {
    getTriggerProps,
    getContentProps,
    getArrowProps,
    getInnerArrowProps,
  } = usePopover({
    trigger: 'hover',
    arrowShadowColor: 'tomato',
    placement: 'bottom',
  });

  return (
    <Flex maxW="400px" mx="auto">
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        marginEnd="200px"
      >
        <Button mt="150px" type="button" {...getTriggerProps()}>
          With Hook
        </Button>

        <Box
          bg="white"
          h="200px"
          w="300px"
          padding="lg"
          borderWidth="1px"
          {...getContentProps()}
        >
          Popper element
          <Box bg="inherit" {...getArrowProps()}>
            <Box {...getInnerArrowProps()}></Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export const WithComponent = () => (
  <Flex align="center" justify="center" flexDirection="column">
    <PopoverV2>
      <PopoverTriggerV2>
        <Button type="button">With Component</Button>
      </PopoverTriggerV2>
      <PopoverContentV2 h="200px" w="300px" borderWidth="1px">
        <PopoverArrowV2 />
        Popper element
      </PopoverContentV2>
    </PopoverV2>
  </Flex>
);

export const ChakraPopover = () => (
  <Flex alignItems="center" justify="center">
    <Box h="100px" />
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  </Flex>
);
