import { Stack, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { usePagination, UsePaginationProps } from './pagination.hook';
import { NextButton, PrevButton, PageLabel } from './pagination.components';

const PageComponent = React.forwardRef(
  ({ as, ...rest }: any, ref: React.Ref<any>) => {
    if (as === null) return null;
    const Comp = as || 'a';
    return <Comp ref={ref} {...rest} />;
  }
);

interface PaginationCustomProps extends BoxProps {
  spacing?: number;
  components?: {
    Label?: React.ElementType<any>;
    Next?: React.ElementType<any>;
    Prev?: React.ElementType<any>;
  };
}

export type MobilePaginationProps = UsePaginationProps & PaginationCustomProps;

export const MobilePagination = (props: MobilePaginationProps) => {
  const {
    fromItem,
    toItem,
    otherProps,
    page,
    getPaginationProps,
    getNextButtonProps,
    getPrevButtonProps,
  } = usePagination(props);

  const { components = {}, spacing = 'lg', ...htmlProps } = otherProps as any;

  const label = `${fromItem} - ${toItem} of ${props.total} items`;
  const rootProps = getPaginationProps(htmlProps) as any;

  return (
    <Stack
      as="nav"
      data-pagination=""
      spacing={spacing}
      direction="row"
      align="center"
      {...rootProps}
    >
      <PageComponent
        data-pagination-prev-btn=""
        as={components.Prev}
        children="<"
        {...getPrevButtonProps()}
        data-test-id="pagination-prev-arrow"
      />
      <PageComponent
        data-pagination-label-btn=""
        as={components.Label}
        data={{ page, fromItem, toItem }}
        children={label}
      />
      <PageComponent
        data-pagination-next-btn=""
        as={components.Next}
        children=">"
        {...getNextButtonProps()}
        data-test-id="pagination-next-arrow"
      />
    </Stack>
  );
};

MobilePagination.defaultProps = {
  components: {
    Next: NextButton,
    Prev: PrevButton,
    Label: PageLabel,
  },
};
