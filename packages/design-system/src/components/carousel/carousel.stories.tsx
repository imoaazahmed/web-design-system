import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { withContainer } from '../story-container';
import {
  Carousel,
  CarouselNextButton,
  CarouselPagination,
  CarouselPrevButton,
  CarouselThumbnail,
  CarouselThumbnailGroup,
  Slide,
  SlideGroup,
  SlideGroupWrapper,
} from './carousel';

export default {
  title: 'CHAKRA/Carousel',
  decorators: [withContainer],
};

export const BasicCarouselHook = () => (
  <Box>
    <Box>
      <Carousel disableOnInteraction loop onSwipe={console.log}>
        <CarouselPrevButton>Prev </CarouselPrevButton>
        <CarouselNextButton>Next </CarouselNextButton>
        <SlideGroupWrapper>
          <SlideGroup>
            <Slide style={{ height: 500, background: 'red' }}>Slide 1</Slide>
            <Slide style={{ height: 500, background: 'teal' }}>Slide 2</Slide>
            <Slide style={{ height: 500, background: 'yellow' }}>Slide 3</Slide>
            <Slide style={{ height: 500, background: 'pink' }}>Slide 4</Slide>
          </SlideGroup>
        </SlideGroupWrapper>
        <CarouselPagination />
        <CarouselThumbnailGroup height="40px">
          <CarouselThumbnail
            src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            w="40px"
          />
          <CarouselThumbnail
            src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            w="40px"
          />
          <CarouselThumbnail
            src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            w="40px"
          />
          <CarouselThumbnail
            src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            w="40px"
          />
        </CarouselThumbnailGroup>
      </Carousel>
      <Box>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </Box>
    </Box>
  </Box>
);

export const CarouselHook = () => (
  <Box>
    <Carousel
      onSwipe={console.log}
      perView={2.5}
      spacing="10px"
      disableOnInteraction
      breakpoints={{
        500: {
          perView: 2.5,
          spacing: 10,
          autoPlay: true,
          offsetBefore: 30,
          offsetAfter: 30,
        },
        800: { perView: 3.5, spacing: 10, autoPlay: false },
      }}
    >
      <Flex justify="space-between">
        <Box>
          <CarouselPrevButton>Prev </CarouselPrevButton>
        </Box>
        <Box>
          <CarouselNextButton>Next </CarouselNextButton>
        </Box>
      </Flex>
      <SlideGroupWrapper
        style={{ background: 'red', boxSizing: 'content-box' }}
      >
        <SlideGroup>
          <Slide style={{ height: 500, background: '#E2FCDA' }}>Slide 1</Slide>
          <Slide style={{ height: 500, background: '#C0F9B7' }}>Slide 2</Slide>
          <Slide style={{ height: 500, background: '#94EE8F' }}>Slide 3</Slide>
          <Slide style={{ height: 500, background: '#70DE74' }}>Slide 4</Slide>
          <Slide style={{ height: 500, background: '#44C956' }}>Slide 5</Slide>
          <Slide style={{ height: 500, background: '#31AC4D' }}>Slide 6</Slide>
          <Slide style={{ height: 500, background: '#229045' }}>Slide 7</Slide>
          <Slide style={{ height: 500, background: '#15743C' }}>Slide 8</Slide>
          <Slide style={{ height: 500, background: '#0D6037' }}>Slide 9</Slide>
          <Slide style={{ height: 500, background: '#0D6037' }}>Slide 10</Slide>
          <Slide style={{ height: 500, background: '#0D6037' }}>Slide 11</Slide>
          <Slide style={{ height: 500, background: '#0D6037' }}>Slide 12</Slide>
        </SlideGroup>
      </SlideGroupWrapper>
      <CarouselPagination />
    </Carousel>
  </Box>
);
