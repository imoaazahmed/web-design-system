import * as React from 'react';
import { pagination, toPages } from './pagination.utils';
import { largePagination } from './pagination-large.utils';
import { useControllable } from '../../hooks';
import { callAllHandlers, PropsOf } from '../../utils';

export interface UsePaginationProps {
  /**
   * The total items count
   */
  total: number;
  /**
   * The items per page in controlled mode
   */
  pageSize?: number;
  /**
   * The default items per page
   */
  defaultPageSize?: number;
  /**
   * Callback fired when page changes
   */
  onPageSizeChange?(nextPageSize: number): void;
  /**
   * The number of page buttons to display to the
   * left and right of current page button
   */
  noOfSiblings?: number;
  /**
   * The initial page in uncontrolled mode
   */
  defaultPage?: number;
  /**
   * If `true`, the pagination will be disabled
   */
  isDisabled?: boolean;
  /**
   * Callback fired when page changes
   */
  onPageChange?(nextPage: number): void;
  /**
   * The current page in controlled mode
   */
  page?: number;
  /**
   *
   */
  variant?: 'default' | 'large';
}

interface PaginationItemProps extends PropsOf<'a'> {
  page: number | string;
  getHref?: (page: number | string) => string;
}

const isEllipsis = (page: number | string): page is string =>
  page === '...' && typeof page === 'string';

export function usePagination(props: UsePaginationProps) {
  const {
    total,
    noOfSiblings,
    onPageChange,
    defaultPage = 1,
    page: pageProp,
    isDisabled,
    pageSize: pageSizeProp,
    defaultPageSize = 10,
    onPageSizeChange,
    variant = 'default',
    ...otherProps
  } = props;

  const [page, setPage] = useControllable({
    value: pageProp,
    defaultValue: defaultPage,
    onChange: onPageChange,
  });

  const [pageSize, setPageSize] = useControllable({
    value: pageSizeProp,
    defaultValue: defaultPageSize,
    onChange: onPageSizeChange,
  });

  const paginate = toPages({ total, pageSize, currentPage: page });

  const activeElement = React.useRef(-1);

  const fn = variant === 'large' ? largePagination : pagination
  const pages = fn({
          current: paginate.current,
          total: paginate.total,
          noOfSiblings,
        })

  const allNodes = React.useRef<Record<string, HTMLElement>>({});

  const next = React.useCallback(() => {
    setPage(page + 1);
  }, [page, setPage]);

  const prev = React.useCallback(() => {
    setPage(page - 1);
  }, [page, setPage]);

  React.useEffect(() => {
    const index = activeElement.current;
    if (index > 0 && allNodes.current[index]) {
      allNodes.current[index].focus({ preventScroll: true });
    }
  });

  function getPaginationItemProps(props: PaginationItemProps): PropsOf<'a'> {
    const isCurrent = props.page === page;

    const handleItemClick = (event: React.MouseEvent) => {
      // don't trigger click if we're clicking on the currently active item again
      if (isCurrent) return;
      event.preventDefault();

      if (!isEllipsis(props.page)) {
        setPage(props.page);
      }

      activeElement.current = props.page as number;
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        // don't trigger click if we're clicking on the currently active item again
        if (isCurrent) return;
        (event.currentTarget as HTMLElement).click();
        activeElement.current = props.page as number;
      }
    };

    const ref = (node: HTMLAnchorElement | null) => {
      if (node) {
        allNodes.current[props.page] = node;
      }
    };

    return {
      ...props,
      ref,
      role: 'button',
      tabIndex: isEllipsis(props.page) ? undefined : 0,
      href: props.getHref?.(props.page),
      'aria-label': isCurrent
        ? `Page ${props.page}, current page`
        : `Go to page ${props.page}`,
      'aria-current': isCurrent ? 'page' : undefined,
      onClick: callAllHandlers(props.onClick, handleItemClick),
      onKeyDown: callAllHandlers(props.onKeyDown, handleKeyDown),
    };
  }

  function getPaginationProps(props: PropsOf<'nav'> = {}) {
    return {
      ...props,
      role: 'navigation',
      'aria-label': 'Pagination',
    };
  }

  const handlePrevClick = (event: React.MouseEvent) => {
    if (page === 1) return;
    event.preventDefault();
    activeElement.current = -1;
    prev();
  };

  function getPrevButtonProps(props: PropsOf<'a'> = {}) {
    return {
      ...props,
      role: 'button',
      tabIndex: page === 1 ? undefined : 0,
      rel: 'prev',
      'aria-label': `Go to previous page`,
      disabled: page === 1,
      'aria-disabled': page === 1 ? true : undefined,
      onClick: callAllHandlers(props.onClick, handlePrevClick),
    };
  }

  const handleNextClick = (event: React.MouseEvent) => {
    if (page >= paginate.total) return;
    event.preventDefault();
    activeElement.current = -1;
    next();
  };

  function getNextButtonProps(props: PropsOf<'a'> = {}): PropsOf<'a'> {
    return {
      ...props,
      role: 'button',
      tabIndex: 0,
      rel: 'next',
      'aria-label': `Go to next page`,
      'aria-disabled': page >= paginate.total ? true : undefined,
      onClick: callAllHandlers(props.onClick, handleNextClick),
    };
  }

  return {
    fromItem: paginate.from,
    toItem: paginate.to,
    page,
    next,
    prev,
    setPage,
    setPageSize,
    pages,
    getPaginationProps,
    getPaginationItemProps,
    getPrevButtonProps,
    getNextButtonProps,
    otherProps,
  };
}
