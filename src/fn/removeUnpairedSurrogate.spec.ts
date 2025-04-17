import removeUnpairedSurrogate from './removeUnpairedSurrogate.js';
import { test, expect } from 'vitest';

/**
 * `U+D800` 最初の上位サロゲート文字
 */
const START_HIGH = '\uD800';

/**
 * `U+DFFF` 最後の下位サロゲート文字
 */
const END_LOW = '\uDFFF';

test('不完全サロゲートペアの削除', () => {
  expect(removeUnpairedSurrogate('𩸽のひらき')).toBe('𩸽のひらき');
});

test('不完全サロゲートペアの削除2', () => {
  expect(removeUnpairedSurrogate('𩸽𩸽𩸽𩸽𩸽')).toBe('𩸽𩸽𩸽𩸽𩸽');
});

test('不完全サロゲートペアの削除3', () => {
  expect(removeUnpairedSurrogate('\ude3d\ud867\ude3d\ud867\ude3d\ud867')).toBe(
    '𩸽𩸽',
  );
});

test('不完全サロゲートペアの削除4', () => {
  expect(removeUnpairedSurrogate('ほっけのひらき')).toBe('ほっけのひらき');
});

test('不完全サロゲートペアの削除5', () => {
  expect(removeUnpairedSurrogate(`${START_HIGH}ほっけのひらき`)).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除6', () => {
  expect(removeUnpairedSurrogate(`ほっけのひらき${END_LOW}`)).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除7', () => {
  expect(removeUnpairedSurrogate(`${START_HIGH}ほっけのひらき`)).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除8', () => {
  expect(removeUnpairedSurrogate(`ほっけのひらき${END_LOW}`)).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除9', () => {
  expect(removeUnpairedSurrogate('ほっけ\ud867のひらき')).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除10', () => {
  expect(removeUnpairedSurrogate('ほっけ\ude3dのひらき')).toBe(
    'ほっけのひらき',
  );
});

test('不完全サロゲートペアの削除11', () => {
  expect(removeUnpairedSurrogate('𩸽\ude3dのひらき')).toBe('𩸽のひらき');
});

test('不完全サロゲートペアの削除12', () => {
  expect(removeUnpairedSurrogate('𩸽\ud867のひらき')).toBe('𩸽のひらき');
});

test('不完全サロゲートペアの削除13', () => {
  expect(removeUnpairedSurrogate('\ude3d𩸽のひらき')).toBe('𩸽のひらき');
});

test('不完全サロゲートペアの削除14', () => {
  expect(removeUnpairedSurrogate('\ud867𩸽のひらき')).toBe('𩸽のひらき');
});

test('不完全サロゲートペアの削除15', () => {
  expect(removeUnpairedSurrogate('ひらきにする𩸽\ud867')).toBe(
    'ひらきにする𩸽',
  );
});

test('不完全サロゲートペアの削除16', () => {
  expect(removeUnpairedSurrogate('ひらきにする𩸽\ude3d')).toBe(
    'ひらきにする𩸽',
  );
});

test('不完全サロゲートペアの削除17', () => {
  expect(removeUnpairedSurrogate('ひらきにする\ud867𩸽')).toBe(
    'ひらきにする𩸽',
  );
});

test('不完全サロゲートペアの削除18', () => {
  expect(removeUnpairedSurrogate('ひらきにする\ude3d𩸽')).toBe(
    'ひらきにする𩸽',
  );
});
