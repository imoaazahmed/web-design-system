import { pagination } from '../pagination.utils';

test('count: 20, noOfSiblings: 1', () => {
  const result = pagination({ current: 18, total: 20, noOfSiblings: 1 });
  expect(result).toEqual([1, '...', 16, 17, 18, 19, 20]);
});

test('count: 20, noOfSiblings: 2', () => {
  const result = pagination({ current: 5, total: 20, noOfSiblings: 2 });
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, '...', 20]);
});

test('count: 20, noOfSiblings: 3', () => {
  const result = pagination({ current: 12, total: 20, noOfSiblings: 3 });
  expect(result).toEqual([1, '...', 9, 10, 11, 12, 13, 14, 15, '...', 20]);
});
