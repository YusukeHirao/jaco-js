import isOnlyHiragana from './isOnlyHiragana.js';
import { test, expect } from 'vitest';

test('ひらがなのみ', () => {
  const testStr = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(isOnlyHiragana(testStr)).toBe(true);
});

test('ひらがなのみ2', () => {
  const testStr = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(isOnlyHiragana(testStr)).toBe(false);
});

test('ひらがなのみ3', () => {
  const testStr = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字',
  ].join('');
  expect(isOnlyHiragana(testStr)).toBe(false);
});

test('ひらがなのみ4', () => {
  const testStr = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123',
  ].join('');
  expect(isOnlyHiragana(testStr)).toBe(false);
});

test('ひらがなのみ5', () => {
  const testStr = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc',
  ].join('');
  expect(isOnlyHiragana(testStr)).toBe(false);
});
