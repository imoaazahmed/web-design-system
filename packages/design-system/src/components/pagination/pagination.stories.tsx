import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Text } from '../typography';
import { Pagination } from './pagination';
import { usePagination } from './pagination.hook';
import { MobilePagination } from './pagination.mobile';

export default {
  title: 'CHAKRA/Pagination',
};

const style: React.CSSProperties = {
  display: 'inline-block',
  margin: 10,
  padding: 12,
  borderRadius: 4,
};

export const PaginationHook = () => {
  const {
    pages,
    page: currentPage,
    getPrevButtonProps,
    getPaginationItemProps,
    getNextButtonProps,
    getPaginationProps,
  } = usePagination({
    defaultPage: 5,
    total: 200,
    defaultPageSize: 10,
  });

  return (
    <nav {...getPaginationProps()}>
      <a style={style} {...getPrevButtonProps()}>
        Prev
      </a>

      {pages.map((page, index) => (
        <a
          key={`${page}-${index}`}
          style={{
            ...style,
            background: currentPage === page ? 'tomato' : 'white',
            color: currentPage === page ? 'white' : 'black',
          }}
          {...getPaginationItemProps({ page })}
        >
          {page}
        </a>
      ))}

      <a style={style} {...getNextButtonProps()}>
        Next
      </a>
    </nav>
  );
};

export const PaginationComponent = () => (
  <Box margin="2xl">
    <Text mt="40px" mb="10px">
      Large Pagination (Two siblings)
    </Text>
    <Pagination total={12480} pageSize={100} noOfSiblings={3} variant="large" />

    <Text mt="40px" mb="10px">
      Small Pagination (One sibling)
    </Text>
    <Pagination size="small" total={1248} pageSize={100} noOfSiblings={1} />
  </Box>
);

export const ControlledPaginationComponent = () => {
  const [page, setPage] = useState(3);
  return (
    <Box margin="2xl">
      <Pagination
        total={1248}
        pageSize={100}
        page={page}
        onPageChange={nextPage => setPage(nextPage)}
      />
    </Box>
  );
};

export const mobilePagination = () => (
  <Box margin="2xl">
    <MobilePagination
      total={523}
      defaultPage={1}
      pageSize={100}
      noOfSiblings={2}
    />
  </Box>
);
