import { describe, expect, test } from 'vitest';
import toPhoneticKana from './toPhoneticKana.js';

describe('toPhoneticKana', () => {
  test('よみ変換', () => {
    expect(toPhoneticKana('あーぁあゝアア')).toBe('あああああああ');
  });
});
