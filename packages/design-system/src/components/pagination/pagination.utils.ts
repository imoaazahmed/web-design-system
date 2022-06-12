import { __DEV__ } from '../../utils';

function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

const isNumber = (value: any): value is number => typeof value === 'number';

const isPositive = (value: any) => isNumber(value) && value > 0;

export function validate(options: PaginationOptions) {
  let { current, noOfSiblings = 1, total } = options;

  if (!isPositive(total)) {
    if (__DEV__) {
      console.warn(`You passed a negative value`);
    }
    total = 0;
  }

  if (!isPositive(noOfSiblings)) {
    if (__DEV__) {
      console.warn(
        `[Tradeling Design System]: You passed a negative value for noOfSiblings or pageSize`
      );
    }
    noOfSiblings = 1;
  }

  if (noOfSiblings * 2 > total) {
    noOfSiblings = 1;
  }

  current = clamp(current, 1, total);

  return {
    total: Math.ceil(total),
    current: Math.round(current),
    noOfSiblings: Math.round(noOfSiblings),
  };
}

export interface PaginationOptions {
  total: number;
  current: number;
  noOfSiblings?: number;
}

export function pagination(options: PaginationOptions) {
  const { total, noOfSiblings, current } = validate(options);

  const max = 2 * noOfSiblings + 5;
  const breakpoint = noOfSiblings + 3;

  const needEllipsis = total > max;
  const pages = range(1, total);

  if (!needEllipsis) return pages;

  if (current <= breakpoint) {
    const from = 1;
    const to = max - 2;
    return [...range(from, to), '...', total];
  }

  if (current > total - breakpoint) {
    const from = total - (max - 3);
    const to = total;
    return [1, '...', ...range(from, to)];
  }

  const from = current - noOfSiblings;
  const to = current + noOfSiblings;
  return [1, '...', ...range(from, to), '...', total];
}

export interface ToPagesOptions {
  pageSize: number;
  total: number;
  currentPage: number;
}

export function toPages(props: ToPagesOptions) {
  const { pageSize, total, currentPage } = props;
  const totalPages = total / pageSize;

  const to = currentPage * pageSize > total ? total : currentPage * pageSize;
  const from = currentPage * pageSize - pageSize + 1;

  return { from, to, total: totalPages, current: currentPage };
}
