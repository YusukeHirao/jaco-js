import toNarrowAlphanumeric from '../../fn/toNarrowAlphanumeric.js';
import { test, expect } from 'vitest';

test('英数字を半角に変換', () => {
  const input = [
    '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
    'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
    'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝',
  ].join('');

  const expected = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝',
  ].join('');

  expect(toNarrowAlphanumeric(input)).toBe(expected);
});
