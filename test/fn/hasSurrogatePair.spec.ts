import hasSurrogatePair from '../../fn/hasSurrogatePair.js';
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

/**
 * `U+DC00` 最初の上位サロゲート文字
 */
const START_LOW = '\uDC00';

/**
 * `U+DFFF` 最後の下位サロゲート文字
 */
const END_LOW = '\uDFFF';

/**
 * `U+E000` 最後の下位サロゲート文字のコードポイントひとつ次の文字
 */
const AFTER_LOW = '\uE000';

test('サロゲートペア検知', () => {
  expect(hasSurrogatePair('𩸽のひらき')).toBe(true);
});

test('サロゲートペア検知2', () => {
  expect(hasSurrogatePair('ほっけのひらき')).toBe(false);
});

test('サロゲートペア検知3 (上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知4 (上位サロゲートのみ)', () => {
  expect(hasSurrogatePair(START_HIGH)).toBe(false);
});

test('サロゲートペア検知5 (上位サロゲートのみ 最後のコードポイント)', () => {
  expect(hasSurrogatePair(END_HIGH)).toBe(false);
});

test('サロゲートペア検知6 (下位サロゲートのみ)', () => {
  expect(hasSurrogatePair(START_LOW)).toBe(false);
});

test('サロゲートペア検知7 (下位サロゲートのみ 最後のコードポイント)', () => {
  expect(hasSurrogatePair(END_LOW)).toBe(false);
});

test('サロゲートペア検知8 (下位サロゲートのコードポイントひとつ次の文字)', () => {
  expect(hasSurrogatePair(AFTER_LOW)).toBe(false);
});

test('サロゲートペア検知9 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(BEFORE_HIGH + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知10 (上位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(START_HIGH + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知11 (上位サロゲートのみ 最後のコードポイント + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(END_HIGH + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知12 (下位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(START_LOW + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知13 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(AFTER_LOW + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知14 (下位サロゲート コードポイントひとつ次 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(hasSurrogatePair(AFTER_LOW + BEFORE_HIGH)).toBe(false);
});

test('サロゲートペア検知15 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲート)', () => {
  expect(hasSurrogatePair(BEFORE_HIGH + START_HIGH)).toBe(false);
});

test('サロゲートペア検知16 (上位サロゲートのみ + 上位サロゲート)', () => {
  expect(hasSurrogatePair(START_HIGH + START_HIGH)).toBe(false);
});

test('サロゲートペア検知17 (上位サロゲートのみ 最後のコードポイント + 上位サロゲート)', () => {
  expect(hasSurrogatePair(END_HIGH + START_HIGH)).toBe(false);
});

test('サロゲートペア検知18 (下位サロゲートのみ + 上位サロゲート)', () => {
  expect(hasSurrogatePair(END_LOW + START_LOW)).toBe(false);
});

test('サロゲートペア検知19 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲート)', () => {
  expect(hasSurrogatePair(AFTER_LOW + START_HIGH)).toBe(false);
});

test('サロゲートペア検知20 (下位サロゲート コードポイントひとつ次 + 上位サロゲート)', () => {
  expect(hasSurrogatePair(AFTER_LOW + START_LOW)).toBe(false);
});
