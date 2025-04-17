import addSemivoicedMarks from './fn/addSemivoicedMarks.js';
import addVoicedMarks from './fn/addVoicedMarks.js';
import byteSize from './fn/byteSize.js';
import combineSoundMarks from './fn/combineSoundMarks.js';
import convertIterationMarks from './fn/convertIterationMarks.js';
import convertProlongedSoundMarks from './fn/convertProlongedSoundMarks.js';
import hasSmallLetter from './fn/hasSmallLetter.js';
import hasSurrogatePair from './fn/hasSurrogatePair.js';
import hasUnpairedSurrogate from './fn/hasUnpairedSurrogate.js';
import isNumeric from './fn/isNumeric.js';
import isOnly from './fn/isOnly.js';
import isOnlyHiragana from './fn/isOnlyHiragana.js';
import isOnlyKatakana from './fn/isOnlyKatakana.js';
import remove from './fn/remove.js';
import removeUnpairedSurrogate from './fn/removeUnpairedSurrogate.js';
import removeVoicedMarks from './fn/removeVoicedMarks.js';
import replaceFromMap from './fn/replaceFromMap.js';
import toBasicLetter from './fn/toBasicLetter.js';
import toHiragana from './fn/toHiragana.js';
import toKatakana from './fn/toKatakana.js';
import toNarrow from './fn/toNarrow.js';
import toNarrowAlphanumeric from './fn/toNarrowAlphanumeric.js';
import toNarrowJapanese from './fn/toNarrowJapanese.js';
import toNarrowKatakana from './fn/toNarrowKatakana.js';
import toNarrowSign from './fn/toNarrowSign.js';
import toNarrowSymbolForJapanese from './fn/toNarrowSymbolForJapanese.js';
import toNumeric from './fn/toNumeric.js';
import toPhoneticKana from './fn/toPhoneticKana.js';
import toWide from './fn/toWide.js';
import toWideAlphanumeric from './fn/toWideAlphanumeric.js';
import toWideJapanese from './fn/toWideJapanese.js';
import toWideKatakana from './fn/toWideKatakana.js';
import toWideSign from './fn/toWideSign.js';
import toWideSymbolForJapanese from './fn/toWideSymbolForJapanese.js';

/**
 * @deprecated Jacoクラスは廃止されました。代わりに各関数を直接インポートしてください。
 *
 * 例:
 * ```
 * import { toHiragana } from 'jaco';
 * const result = toHiragana('カタカナ');
 * ```
 */
const jaco = {
  addSemivoicedMarks,
  addVoicedMarks,
  byteSize,
  combineSoundMarks,
  convertIterationMarks,
  convertProlongedSoundMarks,
  hasSmallLetter,
  hasSurrogatePair,
  hasUnpairedSurrogate,
  isNumeric,
  isOnly,
  isOnlyHiragana,
  isOnlyKatakana,
  remove,
  removeUnpairedSurrogate,
  removeVoicedMarks,
  replaceFromMap,
  toBasicLetter,
  toHiragana,
  toKatakana,
  toNarrow,
  toNarrowAlphanumeric,
  toNarrowJapanese,
  toNarrowKatakana,
  toNarrowSign,
  toNarrowSymbolForJapanese,
  toNumeric,
  toPhoneticKana,
  toWide,
  toWideAlphanumeric,
  toWideJapanese,
  toWideKatakana,
  toWideSign,
  toWideSymbolForJapanese,
};

export default jaco;
