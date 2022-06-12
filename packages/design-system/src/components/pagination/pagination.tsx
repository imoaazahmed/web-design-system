import { Box, BoxProps, chakra, HStack } from '@chakra-ui/react';
import React from 'react';
import {
  NextButton,
  PageButton,
  PageEllipsis,
  PrevButton,
} from './pagination.components';
import { usePagination, UsePaginationProps } from './pagination.hook';

interface PaginationCustomProps extends BoxProps {
  spacing?: number;
  size: 'large' | 'small';
  components?: {
    Button?: React.ElementType<any>;
    Ellipsis?: React.ElementType<any>;
    Next?: React.ElementType<any>;
    Prev?: React.ElementType<any>;
  };
  variant?: 'default' | 'large';
}

const styles = {
  large: {
    prev: { paddingEnd: 'sm', paddingStart: '2xs', minH: '40px' },
    button: {
      minW: '40px',
      minH: '40px',
      paddingStart: 'xs',
      paddingEnd: 'xs',
    },
    next: { paddingEnd: '2xs', paddingStart: 'sm', minH: '40px' },
  },
  small: {
    prev: { px: 'xs', minH: '30px' },
    button: {
      minW: '30px',
      minH: '30px',
      paddingStart: '2xs',
      paddingEnd: '2xs',
    },
    next: { px: 'xs', minH: '30px' },
  },
};

export type PaginationProps = UsePaginationProps & PaginationCustomProps;

const PageComponent = React.forwardRef(
  ({ as, paddingStart, paddingEnd, ...rest }: any, ref: React.Ref<any>) => {
    if (as === null) return null;
    const Comp = as || 'a';

    return (
      <Box m="0" paddingStart={paddingStart} paddingEnd={paddingEnd} as="li">
        <Comp ref={ref} {...rest} />
      </Box>
    );
  }
);

/**
 * Custom pagination component
 */
export const Pagination = (props: PaginationProps) => {
  const {
    otherProps,
    pages,
    page: currentPage,
    getPaginationProps,
    getPaginationItemProps,
    getNextButtonProps,
    getPrevButtonProps,
  } = usePagination(props);

  const {
    components: componentsProp,
    spacing = '0',
    size,
    ...rest
  } = otherProps as PaginationCustomProps;

  const components = {
    ...defaultComponents,
    ...componentsProp,
  };

  const {
    prev: prevStyles,
    next: nextStyles,
    button: buttonStyles,
  } = styles[size];

  return (
    <chakra.nav data-pagination="" {...getPaginationProps(rest)}>
      <HStack
        as="ul"
        data-pagination-list=""
        spacing={spacing}
        listStyleType="none"
      >
        <PageComponent
          {...prevStyles}
          as={components.Prev}
          data-pagination-prev=""
          children="<"
          {...getPrevButtonProps()}
          data-test-id="pagination-previous-arrow"
        />

        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <PageComponent
                as={components.Ellipsis}
                key={`ellipsis-${index}`}
                data-pagination-ellipsis=""
                {...getPaginationItemProps({ page })}
                children={page}
              />
            );
          }

          return (
            <PageComponent
              {...buttonStyles}
              as={components.Button}
              key={page}
              data-pagination-page=""
              {...getPaginationItemProps({ page })}
              isCurrent={currentPage === page}
              children={page}
              data-test-id={`pagination-page-${page}`}
            />
          );
        })}

        <PageComponent
          {...nextStyles}
          as={components.Next}
          data-pagination-prev=""
          {...getNextButtonProps()}
          children=">"
          data-test-id="pagination-next-arrow"
        />
      </HStack>
    </chakra.nav>
  );
};

const defaultComponents = {
  Button: PageButton,
  Ellipsis: PageEllipsis,
  Next: NextButton,
  Prev: PrevButton,
};

Pagination.defaultProps = {
  size: 'large',
  components: defaultComponents,
};
