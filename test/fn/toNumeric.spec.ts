import { describe, expect, test } from 'vitest';
import toNumeric from '../../fn/toNumeric.js';

describe('toNumeric', () => {
  test('数字化', () => {
    const a = ' ２３ｓ０３ｓｄｋふぁえ';
    const b = '2303';
    expect(toNumeric(a)).toBe(b);
  });

  test('数字化2', () => {
    const a = ' ー-.。２.３ｓ０。３.ｓｄｋふぁえ';
    const b = '2303';
    expect(toNumeric(a)).toBe(b);
  });

  test('数字化3', () => {
    const a = ' ２-３ｓ０３ｓｄｋふぁえ';
    const b = '2303';
    expect(toNumeric(a, true)).toBe(b);
  });

  test('数字化4', () => {
    const a = '- ２３ｓ０３ｓｄｋふぁえ';
    const b = '-2303';
    expect(toNumeric(a, true)).toBe(b);
  });

  test('数字化5', () => {
    const a = ' -２-３-.ｓ０.３ｓｄｋふぁえ';
    const b = '-23.03';
    expect(toNumeric(a, true, true)).toBe(b);
  });

  test('数字化6', () => {
    const a = ' ２３.-.-ｓ０３.ｓｄｋふぁえ';
    const b = '23.03';
    expect(toNumeric(a, true, true)).toBe(b);
  });

  test('数字化7', () => {
    const a = '- ２３ｓ０３ｓｄｋふぁえ...';
    const b = '2303';
    expect(toNumeric(a, false, true)).toBe(b);
  });
});
