import { describe, expect, test } from 'vitest';
import toPhoeticKana from './toPhoeticKana.js';

describe('toPhoeticKana', () => {
  test('よみ変換', () => {
    expect(toPhoeticKana('あーぁあゝアア')).toBe('あああああああ');
  });
});
