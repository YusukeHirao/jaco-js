import removeVoicedMarks from '../../fn/removeVoicedMarks.js';
import { test, expect } from 'vitest';

test('濁点・半濁点除去', () => {
  const input = [
    'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
    'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');

  const expected = [
    'かきくけこさしすせそたちつてとはひふへほはひふへほ',
    'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ',
  ].join('');

  expect(removeVoicedMarks(input)).toBe(expected);
});
