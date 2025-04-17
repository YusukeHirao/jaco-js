import toWideSign from '../../fn/toWideSign.js';
import { test, expect } from 'vitest';

test('記号を全角に変換', () => {
  const a = [
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
    'abcdefghijklmnopqrstuvwxyz{|}',
  ].join('');
  const b = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝',
  ].join('');
  expect(toWideSign(a)).toBe(b);
});
