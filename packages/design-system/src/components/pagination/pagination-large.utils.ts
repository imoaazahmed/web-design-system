import { PaginationOptions, validate } from './pagination.utils';

function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

const getCurrentActive = (
  noOfSiblings: number,
  current: number,
  total: number
) => {
  const min = current - noOfSiblings;
  const max = current + noOfSiblings;

  if (min <= 1) {
    return [...range(2, current + noOfSiblings), '...'];
  }

  if (max >= total) {
    return ['...', ...range(min, total - 1)];
  }

  return [
    '...',
    ...range(current - noOfSiblings, current + noOfSiblings),
    '...',
  ];
};

const getNext = (num: number, changeValueBy: number, total: number) => {
  const result = [];
  /**
   * if num=333, and changeValueBy=10
   * startAt will be 340, stopAt will be 400
   * this means we need to increase num by 10 until we achieve the next breakpoint which is 400
   * [340, 350, 360, 370, 380, 390]
   */
  const startAt = Math.ceil(num / changeValueBy) * changeValueBy;
  const stopAt = Math.ceil(num / (changeValueBy * 10)) * (changeValueBy * 10);

  for (let i = startAt; i < stopAt; i += changeValueBy) {
    if (i === num || i === total) continue;
    if (i > total) break;
    result.push(i);
  }
  return result;
};

const getPrev = (num: number, changeValueBy: number) => {
  const result = [];
  /**
   * if num=333, and changeValueBy=10
   * startAt will be 330, stopAt will be 300
   * this means we need to increase num by 10 until we achieve the next breakpoint which is 300
   * [330, 320, 310]
   */
  const startAt = Math.floor(num / changeValueBy) * changeValueBy;
  const stopAt = Math.floor(num / (changeValueBy * 10)) * (changeValueBy * 10);

  for (let i = startAt; i > stopAt; i -= changeValueBy) {
    if (i === num) continue;
    if (i <= 0) break;
    result.push(i);
  }
  return result;
};

export function largePagination(options: PaginationOptions) {
  const { total, noOfSiblings, current } = validate(options);

  const needEllipsis = total > 2 * noOfSiblings + 5;
  if (!needEllipsis) return range(1, total);

  /**
   * total: 22 => numberOfDigits will be 1
   * total: 125 => numberOfDigits will be 2
   * numberOfDigits will present the ranges we will go through
   * for example: if it is 2, it means that we will have two types of ranges 10's and 100's
   */
  const numberOfDigits = total.toString().length - 1;

  /**
   * Thinks about this as we will have the pagination as three parts:
   *    current: previous siblings + currentPage + next siblings
   *    next: we will start form the next sibling in current and get the pages to the end based on the ranges which will be handled by numberOfDigits
   *    prev:we will start form the previous sibling in current and get the pages to the start based on the ranges which will be handled by numberOfDigits
   */
  const currentResults = getCurrentActive(noOfSiblings, current, total);
  const nextResults = [],
    previousResults = [];

  const startGetNextFrom = current + noOfSiblings;
  const startGetPrevFrom = current - noOfSiblings;

  for (let i = 1; i <= numberOfDigits; i++) {
    /**
     * changeValueBy: will be like steps, so we can get every 10 pages or 100 pages ...
     * so if i=1: changeValueBy will be 10, which means if the startPage is 520, we should get [520, 530, 540, 550, 560, 570, 580, 590];
     * if i=2: changeValueBy will be 100, which means if the startPage is 500, we should get [500, 600, 700, 800, 900];
     */
    const changeValueBy = Math.pow(10, i);
    nextResults.push(...getNext(startGetNextFrom, changeValueBy, total));
    previousResults.push(...getPrev(startGetPrevFrom, changeValueBy));
  }

  return [
    1,
    ...previousResults.reverse(),
    ...currentResults,
    ...nextResults,
    total,
  ];
}
