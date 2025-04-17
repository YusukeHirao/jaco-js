import convertIterationMarks from './convertIterationMarks.js';
import { test, expect } from 'vitest';

test('繰り返し記号変換', () => {
  expect(convertIterationMarks('がくもんのすゝめ')).toBe('がくもんのすすめ');
});

test('繰り返し記号変換2', () => {
  expect(convertIterationMarks('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ')).toBe(
    'がくもんのすすすすすすすすすすすすすめ',
  );
});

test('繰り返し記号変換3', () => {
  expect(
    convertIterationMarks('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ'),
  ).toBe('がくもんのすすすすずすすすすすすすすすめ');
});

test('繰り返し記号変換4', () => {
  expect(convertIterationMarks('ゝゞあゝゞかゞゝがゝゞゝ')).toBe(
    'ゝゞあああかがかがかがか',
  );
});

test('繰り返し記号変換5', () => {
  expect(convertIterationMarks('ガクモンノスヽヽヽヽヽヽヽヽヽヽヽヽメ')).toBe(
    'ガクモンノスススススススススススススメ',
  );
});

test('繰り返し記号変換6', () => {
  expect(convertIterationMarks('ヽヾアヽヾカヾヽガヽヾヽ')).toBe(
    'ヽヾアアアカガカガカガカ',
  );
});
