import { describe, expect, test } from 'vitest';
import toNarrowSymbolForJapanese from './toNarrowSymbolForJapanese.js';

describe('toNarrowSymbolForJapanese', () => {
  test('日本語記号の半角化', () => {
    const a = '。「」、・';
    const b = '｡｢｣､･';
    expect(toNarrowSymbolForJapanese(a)).toBe(b);
  });
});
