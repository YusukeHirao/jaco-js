import _addSemivoicedMarks from './fn/addSemivoicedMarks';
import _addVoicedMarks from './fn/addVoicedMarks';
import _byteSize from './fn/byteSize';
import _charAt from './fn/charAt';
import _charCodeAt from './fn/charCodeAt';
import _combinateSoundMarks from './fn/combinateSoundMarks';
import _concat from './fn/concat';
import _convertIterationMarks from './fn/convertIterationMarks';
import _convertProlongedSoundMarks from './fn/convertProlongedSoundMarks';
import _endWith from './fn/endWith';
import _has from './fn/has';
import _hasSmallLetter from './fn/hasSmallLetter';
import _hasSurrogatePair from './fn/hasSurrogatePair';
import _hasUnpairedSurrogate from './fn/hasUnpairedSurrogate';
import _includes from './fn/includes';
import _indexOf from './fn/indexOf';
import _is from './fn/is';
import _isEmpty from './fn/isEmpty';
import _isNumeric from './fn/isNumeric';
import _isOnly from './fn/isOnly';
import _isOnlyHiragana from './fn/isOnlyHiragana';
import _isOnlyKatakana from './fn/isOnlyKatakana';
import _lastIndexOf from './fn/lastIndexOf';
import _matches from './fn/matches';
import _naturalKanaOrder from './fn/naturalKanaOrder';
import _naturalKanaSort from './fn/naturalKanaSort';
import _padEnd from './fn/padEnd';
import _padStart from './fn/padStart';
import _remove from './fn/remove';
import _removeUnpairedSurrogate from './fn/removeUnpairedSurrogate';
import _removeVoicedMarks from './fn/removeVoicedMarks';
import _repeat from './fn/repeat';
import _replace from './fn/replace';
import _replaceFromMap from './fn/replaceFromMap';
import _search from './fn/search';
import _slice from './fn/slice';
import _split from './fn/split';
import _startsWith from './fn/startsWith';
import _substr from './fn/substr';
import _substring from './fn/substring';
import _test from './fn/test';
import _toBasicLetter from './fn/toBasicLetter';
import _toHiragana from './fn/toHiragana';
import _toKatakana from './fn/toKatakana';
import _toNarrow from './fn/toNarrow';
import _toNarrowAlphanumeric from './fn/toNarrowAlphanumeric';
import _toNarrowJapanese from './fn/toNarrowJapanese';
import _toNarrowKatakana from './fn/toNarrowKatakana';
import _toNarrowSign from './fn/toNarrowSign';
import _toNarrowSymbolForJapanese from './fn/toNarrowSymbolForJapanese';
import _toNumeric from './fn/toNumeric';
import _toPhoeticKana from './fn/toPhoeticKana';
import _toWide from './fn/toWide';
import _toWideAlphanumeric from './fn/toWideAlphanumeric';
import _toWideJapanese from './fn/toWideJapanese';
import _toWideKatakana from './fn/toWideKatakana';
import _toWideSign from './fn/toWideSign';
import _toWideSymbolForJapanese from './fn/toWideSymbolForJapanese';

import Jaco from './jaco';

// tslint:disable-next-line:no-any
function jaco(str: any): Jaco {
  return new Jaco(str);
}

// tslint:disable:no-namespace no-mergeable-namespace
namespace jaco {
  'use strict';

  export const version = '2.0.0-beta';

  export const addSemivoicedMarks = _addSemivoicedMarks;
  export const addVoicedMarks = _addVoicedMarks;
  export const byteSize = _byteSize;
  export const charAt = _charAt;
  export const charCodeAt = _charCodeAt;
  export const combinateSoundMarks = _combinateSoundMarks;
  export const concat = _concat;
  export const convertIterationMarks = _convertIterationMarks;
  export const convertProlongedSoundMarks = _convertProlongedSoundMarks;
  export const endWith = _endWith;
  export const has = _has;
  export const hasSmallLetter = _hasSmallLetter;
  export const hasSurrogatePair = _hasSurrogatePair;
  export const hasUnpairedSurrogate = _hasUnpairedSurrogate;
  export const includes = _includes;
  export const indexOf = _indexOf;
  export const is = _is;
  export const isEmpty = _isEmpty;
  export const isNumeric = _isNumeric;
  export const isOnly = _isOnly;
  export const isOnlyHiragana = _isOnlyHiragana;
  export const isOnlyKatakana = _isOnlyKatakana;
  export const lastIndexOf = _lastIndexOf;
  export const matches = _matches;
  export const naturalKanaOrder = _naturalKanaOrder;
  export const naturalKanaSort = _naturalKanaSort;
  export const padEnd = _padEnd;
  export const padStart = _padStart;
  export const remove = _remove;
  export const removeUnpairedSurrogate = _removeUnpairedSurrogate;
  export const removeVoicedMarks = _removeVoicedMarks;
  export const repeat = _repeat;
  export const replace = _replace;
  export const replaceFromMap = _replaceFromMap;
  export const search = _search;
  export const slice = _slice;
  export const split = _split;
  export const startsWith = _startsWith;
  export const substr = _substr;
  export const substring = _substring;
  export const test = _test;
  export const toBasicLetter = _toBasicLetter;
  export const toHiragana = _toHiragana;
  export const toKatakana = _toKatakana;
  export const toNarrow = _toNarrow;
  export const toNarrowAlphanumeric = _toNarrowAlphanumeric;
  export const toNarrowJapanese = _toNarrowJapanese;
  export const toNarrowKatakana = _toNarrowKatakana;
  export const toNarrowSign = _toNarrowSign;
  export const toNarrowSymbolForJapanese = _toNarrowSymbolForJapanese;
  export const toNumeric = _toNumeric;
  export const toPhoeticKana = _toPhoeticKana;
  export const toWide = _toWide;
  export const toWideAlphanumeric = _toWideAlphanumeric;
  export const toWideJapanese = _toWideJapanese;
  export const toWideKatakana = _toWideKatakana;
  export const toWideSign = _toWideSign;
  export const toWideSymbolForJapanese = _toWideSymbolForJapanese;
}

// @ts-ignore
window['jaco'] = jaco; // tslint:disable-line:no-string-literal
