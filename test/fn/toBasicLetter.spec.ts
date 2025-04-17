import toBasicLetter from '../../fn/toBasicLetter.js';
import { test, expect } from 'vitest';

test('小書き文字を基底文字に変換', () => {
  expect(toBasicLetter('あァァァんまりだァァアァ')).toBe(
    'あアアアんまりだアアアア',
  );
});
