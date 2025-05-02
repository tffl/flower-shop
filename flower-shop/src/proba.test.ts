import { expect, test } from 'vitest';
import { sum } from './proba';

test('correctly adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('works with negative numbers', () => {
  expect(sum(-1, 5)).toBe(4);
});

test('handles zero values', () => {
  expect(sum(0, 0)).toBe(0);
});