import { describe, expect, test } from 'vitest';
import toWideAlphanumeric from './toWideAlphanumeric.js';

describe('toWideAlphanumeric', () => {
  test('英数字を全角に変換', () => {
    const a = [
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}',
    ].join('');
    const b = [
      '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}',
    ].join('');
    expect(toWideAlphanumeric(a)).toBe(b);
  });
});
