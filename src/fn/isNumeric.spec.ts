import isNumeric from './isNumeric.js';
import { test, expect } from 'vitest';

test('数字かどうか1', () => {
  expect(isNumeric(' ２３ｓ０３ｓｄｋふぁえ')).toBe(false);
});

test('数字かどうか2', () => {
  expect(isNumeric('２３０３')).toBe(false);
});

test('数字かどうか3', () => {
  expect(isNumeric('000012303234')).toBe(true);
});

test('数字かどうか4', () => {
  expect(isNumeric('-123.3234')).toBe(true);
});

test('数字かどうか5', () => {
  expect(isNumeric('-123.3234.')).toBe(false);
});

test('数字かどうか6', () => {
  expect(isNumeric('12-3.3234.')).toBe(false);
});

test('数字かどうか7', () => {
  expect(isNumeric('.3234')).toBe(true);
});

test('数字かどうか8', () => {
  expect(isNumeric('-.3234')).toBe(true);
});

test('数字かどうか9', () => {
  expect(isNumeric('.3234', false)).toBe(true);
});

test('数字かどうか10', () => {
  expect(isNumeric('-.3234', true)).toBe(true);
});

test('数字かどうか11', () => {
  expect(isNumeric('.3234', true, true)).toBe(true);
});

test('数字かどうか12', () => {
  expect(isNumeric('-.3234', true, false)).toBe(false);
});

test('数字かどうか13', () => {
  expect(isNumeric('.3234', false, false)).toBe(false);
});

test('数字かどうか14', () => {
  expect(isNumeric('-.3234', false, true)).toBe(false);
});
