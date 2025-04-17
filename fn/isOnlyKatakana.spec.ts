import isOnlyKatakana from './isOnlyKatakana.js';
import { test, expect } from 'vitest';

test('カタカナのみ', () => {
  const testStr = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜',
  ].join('');
  expect(isOnlyKatakana(testStr)).toBe(true);
});

test('カタカナのみ2', () => {
  const testStr = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(isOnlyKatakana(testStr)).toBe(false);
});

test('カタカナのみ3', () => {
  const testStr = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字',
  ].join('');
  expect(isOnlyKatakana(testStr)).toBe(false);
});

test('カタカナのみ4', () => {
  const testStr = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123',
  ].join('');
  expect(isOnlyKatakana(testStr)).toBe(false);
});

test('カタカナのみ5', () => {
  const testStr = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc',
  ].join('');
  expect(isOnlyKatakana(testStr)).toBe(false);
});
