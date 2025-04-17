import combinateSoundMarks from '../../fn/combinateSoundMarks.js';
import { test, expect } from 'vitest';

test('濁点・半濁点の結合', () => {
  expect(combinateSoundMarks('か゛き゛く゛け゛こ゛', true)).toBe(
    'がぎぐげご',
  );
});

test('濁点・半濁点の結合2', () => {
  expect(combinateSoundMarks('は゜ひ゜ふ゜へ゜ほ゜', true)).toBe(
    'ぱぴぷぺぽ',
  );
});

test('濁点・半濁点の結合3', () => {
  expect(combinateSoundMarks('か゛き゛く゛け゛こ゛')).toBe('がぎぐげご');
});

test('濁点・半濁点の結合4', () => {
  expect(combinateSoundMarks('は゜ひ゜ふ゜へ゜ほ゜')).toBe('ぱぴぷぺぽ');
});

test('濁点・半濁点の結合5', () => {
  expect(combinateSoundMarks('がぎぐげご')).toBe('がぎぐげご');
});

test('濁点・半濁点の結合6', () => {
  expect(combinateSoundMarks('ぱぴぷぺぽ')).toBe('ぱぴぷぺぽ');
});
