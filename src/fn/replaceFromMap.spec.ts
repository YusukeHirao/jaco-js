import replaceFromMap from './replaceFromMap.js';
import { test, expect } from 'vitest';

test('マップから置換', () => {
  expect(
    replaceFromMap('abcdeABCDE', {
      abc: 'z',
      ABC: 'Z',
    }),
  ).toBe('zdeZDE');
});
