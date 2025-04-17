import { describe, expect, test } from 'vitest';
import toNarrowSign from '../../fn/toNarrowSign.js';

describe('toNarrowSign', () => {
  test('記号を半角に変換', () => {
    const a = [
      '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝',
    ].join('');
    const b = [
      '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}',
    ].join('');
    expect(toNarrowSign(a)).toBe(b);
  });
});
