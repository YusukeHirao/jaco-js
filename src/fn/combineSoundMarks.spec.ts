import combineSoundMarks from './combineSoundMarks.js';
import { test, expect } from 'vitest';

test('濁点・半濁点の結合', () => {
  expect(combineSoundMarks('か゛き゛く゛け゛こ゛', true)).toBe(
    'がぎぐげご',
  );
});

test('濁点・半濁点の結合2', () => {
  expect(combineSoundMarks('は゜ひ゜ふ゜へ゜ほ゜', true)).toBe(
    'ぱぴぷぺぽ',
  );
});

test('濁点・半濁点の結合3', () => {
  expect(combineSoundMarks('か゛き゛く゛け゛こ゛')).toBe('がぎぐげご');
});

test('濁点・半濁点の結合4', () => {
  expect(combineSoundMarks('は゜ひ゜ふ゜へ゜ほ゜')).toBe('ぱぴぷぺぽ');
});

test('濁点・半濁点の結合5', () => {
  expect(combineSoundMarks('がぎぐげご')).toBe('がぎぐげご');
});

test('濁点・半濁点の結合6', () => {
  expect(combineSoundMarks('ぱぴぷぺぽ')).toBe('ぱぴぷぺぽ');
});

test('濁点・半濁点の結合（わ行）', () => {
  expect(combineSoundMarks('ヷイ゙ヴエ゙ヺ')).toBe('ヷヸヴヹヺ');
});
