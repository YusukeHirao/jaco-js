import isOnly from '../../fn/isOnly.js';
import { test, expect } from 'vitest';

test('該当の文字のみ', () => {
  expect(isOnly('いろは', 'いろはにほへと')).toBe(true);
});

test('該当の文字のみ2', () => {
  expect(isOnly('いろは', 'いはにほへと')).toBe(false);
});

test('該当の文字のみ3', () => {
  expect(isOnly('abcいろは', 'いろはにほへと')).toBe(false);
});

test('該当の文字のみ4', () => {
  expect(isOnly('いろは', 'いろは')).toBe(true);
});

test('該当の文字のみ5', () => {
  expect(isOnly('いろは', 'いろ')).toBe(false);
});

test('該当の文字のみ6', () => {
  expect(isOnly('いろは', 'いろろろろははははにににに')).toBe(true);
});

test('該当の文字のみ7', () => {
  expect(isOnly('いろはち', 'いろはにほへと')).toBe(false);
});

test('該当の文字のみ8', () => {
  expect(isOnly('いろはち', ']()[][')).toBe(false);
});

test('該当の文字のみ9', () => {
  expect(isOnly('\\', ']()[]\\')).toBe(true);
});

test('該当の文字のみ10', () => {
  expect(isOnly('\\', '\\')).toBe(true);
});

test('該当の文字のみ11', () => {
  expect(isOnly('\\あ\\', '\\あ')).toBe(true);
});

test('該当の文字のみ12', () => {
  expect(isOnly('^^^', '^')).toBe(true);
});

test('該当の文字のみ13', () => {
  expect(isOnly('^$^', '$^')).toBe(true);
});

test('該当の文字のみ14', () => {
  expect(isOnly('あいうえお', 'あ-お')).toBe(true);
});

test('該当の文字のみ15', () => {
  expect(isOnly('あいうえおか', 'あ-お')).toBe(false);
});
