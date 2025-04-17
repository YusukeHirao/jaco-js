import addSemivoicedMarks from '../../fn/addSemivoicedMarks.js';
import { test, expect } from 'vitest';

test('半濁点付加', () => {
  expect(addSemivoicedMarks('あかうはひふへほハヒフヘホ')).toBe(
    'あかうぱぴぷぺぽパピプペポ',
  );
});
