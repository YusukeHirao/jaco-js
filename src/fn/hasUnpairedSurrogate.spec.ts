import hasUnpairedSurrogate from './hasUnpairedSurrogate.js';
import { test, expect } from 'vitest';

/**
 * `U+D7FF` 上位サロゲートのコードポイントひとつ前の文字
 */
const BEFORE_HIGH = '\uD7FF';

/**
 * `U+D800` 最初の上位サロゲート文字
 */
const START_HIGH = '\uD800';

/**
 * `U+DBFF` 最後の上位サロゲート文字
 */
const END_HIGH = '\uDBFF';

test('不完全サロゲートペア検知', () => {
  expect(hasUnpairedSurrogate('𩸽のひらき')).toBe(false);
});

test('不完全サロゲートペア検知2', () => {
  expect(hasUnpairedSurrogate('𩸽𩸽𩸽𩸽𩸽')).toBe(false);
});

test('不完全サロゲートペア検知3', () => {
  expect(hasUnpairedSurrogate('ほっけのひらき')).toBe(false);
});

test('不完全サロゲートペア検知4', () => {
  expect(hasUnpairedSurrogate(BEFORE_HIGH)).toBe(false);
});

test('不完全サロゲートペア検知5', () => {
  expect(hasUnpairedSurrogate(BEFORE_HIGH + START_HIGH)).toBe(true);
});

test('不完全サロゲートペア検知6', () => {
  expect(hasUnpairedSurrogate(BEFORE_HIGH + START_HIGH + END_HIGH)).toBe(true);
});

test('不完全サロゲートペア検知7', () => {
  expect(hasUnpairedSurrogate('\ud867ほっけのひらき')).toBe(true);
});

test('不完全サロゲートペア検知8', () => {
  expect(hasUnpairedSurrogate('ほっけのひらき\ud867')).toBe(true);
});

test('不完全サロゲートペア検知9', () => {
  expect(hasUnpairedSurrogate('ほっけ\ud867のひらき')).toBe(true);
});

test('不完全サロゲートペア検知10', () => {
  expect(hasUnpairedSurrogate('ほっけ\ude3dのひらき')).toBe(true);
});

test('不完全サロゲートペア検知11', () => {
  expect(hasUnpairedSurrogate('𩸽\ude3dのひらき')).toBe(true);
});

test('不完全サロゲートペア検知12', () => {
  expect(hasUnpairedSurrogate('𩸽\ud867のひらき')).toBe(true);
});

test('不完全サロゲートペア検知13', () => {
  expect(hasUnpairedSurrogate('\ude3d𩸽のひらき')).toBe(true);
});

test('不完全サロゲートペア検知14', () => {
  expect(hasUnpairedSurrogate('\ud867𩸽のひらき')).toBe(true);
});

test('不完全サロゲートペア検知15', () => {
  expect(hasUnpairedSurrogate('ひらきにする𩸽\ud867')).toBe(true);
});

test('不完全サロゲートペア検知16', () => {
  expect(hasUnpairedSurrogate('ひらきにする𩸽\ude3d')).toBe(true);
});

test('不完全サロゲートペア検知17', () => {
  expect(hasUnpairedSurrogate('ひらきにする\ud867𩸽')).toBe(true);
});

test('不完全サロゲートペア検知18', () => {
  expect(hasUnpairedSurrogate('ひらきにする\ude3d𩸽')).toBe(true);
});
