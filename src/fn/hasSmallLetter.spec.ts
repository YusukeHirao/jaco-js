import hasSmallLetter from './hasSmallLetter.js';
import { test, expect } from 'vitest';

test('小書き文字の検知', () => {
  expect(
    hasSmallLetter(
      'ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ',
    ),
  ).toBe(true);
});

test('小書き文字の検知2', () => {
  expect(hasSmallLetter('あァァァんまりだァァアァ')).toBe(true);
});

test('小書き文字の検知3', () => {
  expect(hasSmallLetter('あいうえお')).toBe(false);
});
