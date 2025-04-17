import byteSize from './byteSize.js';
import { test, expect } from 'vitest';

test('バイト数', () => {
  expect(byteSize('あいうえおabc')).toBe(18);
});

test('バイト数2', () => {
  expect(byteSize('あ い う え\nお a b c')).toBe(25);
});
