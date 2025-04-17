import remove from './remove.js';
import { test, expect } from 'vitest';

test('削除', () => {
  expect(remove('aBcDeFgHiJkLmNoPqRsTuVwXyZ', 'aBc')).toBe(
    'DeFgHiJkLmNoPqRsTuVwXyZ',
  );
});

test('削除2', () => {
  expect(remove('aBcDeFgHiJkLmNoPqRsTuVwXyZ', /[a-z]/)).toBe(
    'BcDeFgHiJkLmNoPqRsTuVwXyZ',
  );
});

test('削除3', () => {
  expect(remove('aBcDeFgHiJkLmNoPqRsTuVwXyZ', /[a-z]/g)).toBe('BDFHJLNPRTVXZ');
});
