import { Box, BoxProps, chakra, Stack, StackProps } from '@chakra-ui/react';
import React from 'react';
import {
  useCarousel,
  UseCarouselProps,
  UseCarouselReturn,
} from './use-carousel';

type PropsOf<T extends React.ElementType> = React.ComponentProps<T>;

type CarouselContextType = Omit<UseCarouselReturn, 'getRootProps'>;

const CarouselContext = React.createContext({} as CarouselContextType);

export const useCarouselContext = () => React.useContext(CarouselContext);

export const Carousel: React.FC<UseCarouselProps> = props => {
  const { getRootProps, ...context } = useCarousel(props);
  const ctx = React.useMemo(() => context, [context]);
  const { ref, ...wrapperProps } = getRootProps();
  return (
    <CarouselContext.Provider value={ctx}>
      <chakra.div ref={ref} {...(wrapperProps as PropsOf<'div'>)}>
        {props.children}
      </chakra.div>
    </CarouselContext.Provider>
  );
};

export const SlideGroupWrapper = (props: PropsOf<'div'>) => {
  const { getSlideGroupWrapperProps } = useCarouselContext();
  const ownProps = getSlideGroupWrapperProps(props) as PropsOf<'div'>;
  return <chakra.div {...ownProps} />;
};

export const SlideGroup = (props: PropsOf<'div'>) => {
  const { getSlideGroupProps } = useCarouselContext();
  const ownProps = getSlideGroupProps(props) as PropsOf<'div'>;
  return <chakra.div {...ownProps} />;
};

export const Slide = React.forwardRef(
  (props: PropsOf<'div'>, ref: React.Ref<any>) => {
    const { getSlideProps } = useCarouselContext();
    const ownProps = getSlideProps(props) as PropsOf<'div'>;
    return <chakra.div ref={ref} {...ownProps} />;
  }
);

export type CarouselNextButtonProps = BoxProps & PropsOf<'button'>;

export const CarouselNextButton = (props: CarouselNextButtonProps) => {
  const { getNextButtonProps } = useCarouselContext();
  const ownProps = getNextButtonProps(props);
  return <Box as="button" outline="0" {...ownProps} />;
};

export type CarouselPrevButtonProps = BoxProps & PropsOf<'button'>;

export const CarouselPrevButton = (props: CarouselPrevButtonProps) => {
  const { getPrevButton } = useCarouselContext();
  const ownProps = getPrevButton(props);
  return <Box as="button" outline="0" {...ownProps} />;
};

const getDotStyle = (props: { isSelected?: boolean }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '100%',
  background: props.isSelected ? 'black' : 'rgba(0,0,0,0.2)',
  margin: '0 5px',
});

export type DotProps = BoxProps &
  PropsOf<'button'> & {
    index?: number;
    isSelected?: boolean;
  };

export const Dot = (props: DotProps) => {
  const { index, isSelected, ...rest } = props;
  const styles = getDotStyle(props);
  return <chakra.button outline="0" {...styles} {...rest} />;
};

export type CarouselPaginationProps = StackProps & {
  dot?: React.ReactNode;
};

export const CarouselPagination = (props: CarouselPaginationProps) => {
  const { dot = <Dot />, ...rest } = props;
  const { getPaginationProps } = useCarouselContext();
  const ownProps = getPaginationProps({ ...rest, children: dot }) as StackProps;
  return <Stack direction="row" {...ownProps} />;
};

export const CarouselThumbnailGroup = (props: StackProps) => {
  const { getThumbnailGroupProps } = useCarouselContext();
  const ownProps = getThumbnailGroupProps(props);
  return <Stack outline="0" direction="row" {...ownProps} />;
};

type CarouselThumbnailProps = BoxProps & {
  isSelected?: boolean;
  index?: number;
  src?: string;
};

/**
 * The carousel thumbnail to control the pagination
 * Note 🚨: Use _selected to style the selected state of the thumbnail.
 */
export const CarouselThumbnail = (props: CarouselThumbnailProps) => {
  const { index, isSelected, src, ...rest } = props;
  return (
    <Box
      height="100%"
      bgSize="100%"
      bgPos="center"
      bgImage={`url(${src})`}
      boxShadow={isSelected ? 'outline' : undefined}
      aria-selected={isSelected ? 'true' : undefined}
      {...rest}
    />
  );
};
