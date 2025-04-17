import addVoicedMarks from './addVoicedMarks.js';
import { test, expect } from 'vitest';

test('濁点付加', () => {
  expect(addVoicedMarks('あかうはひふへほハヒフヘホ')).toBe(
    'あがうばびぶべぼバビブベボ',
  );
});
