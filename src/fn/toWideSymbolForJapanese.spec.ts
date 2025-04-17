import toWideSymbolForJapanese from './toWideSymbolForJapanese.js';
import { test, expect } from 'vitest';

test('日本語記号の全角化', () => {
  const a = '｡｢｣､･';
  const b = '。「」、・';
  expect(toWideSymbolForJapanese(a)).toBe(b);
});
