/**
 * タブ [HT]
 *
 */
const CHARACTER_TABULATION = '\u0009';

/**
 * 垂直タブ [VT]
 */
const LINE_TABULATION = '\u000B';

/**
 * フォームフィード [FF]
 */
const FORM_FEED = '\u000C';

/**
 * 空白文字
 */
const SPACE = '\u0020';

/**
 * Next line [NEL]
 */
const NEXT_LINE = '\u0085';

/**
 * ノーブレークスペース [NBSP]
 */
const NO_BREAK_SPACE = '\u00A0';

/**
 * n幅 クワタ
 */
const EN_QUAD = '\u2000';

/**
 * m幅 クワタ
 */
const EM_QUAD = '\u2001';

/**
 * n幅 空白
 */
const EN_SPACE = '\u2002';

/**
 * m幅 空白
 */
const EM_SPACE = '\u2003';

/**
 * 1/3 m幅 空白
 */
const THREE_PER_EM_SPACE = '\u2004';

/**
 * 1/4 m幅 空白
 */
const FOUR_PER_EM_SPACE = '\u2005';

/**
 * 1/6 m幅 空白
 */
const SIX_PER_EM_SPACE = '\u2006';

/**
 * Figure space
 *
 * > In fonts with monospaced digits, equal to the width of one digit. HTML/XML named entity: &numsp;
 */
const FIGURE_SPACE = '\u2007';

/**
 * Punctuation space
 *
 * > As wide as the narrow punctuation in a font, i.e. the advance width of the period or comma. HTML/XML named entity: &puncsp;
 */
const PUNCTUATION_SPACE = '\u2008';

/**
 * 細い空白
 */
const THIN_SPACE = '\u2009';

/**
 * Mongolian vowel separator
 *
 * > MVS. A narrow space character, used in Mongolian to cause the final two characters of a word to take on different shapes.
 * > It is no longer classified as space character (i.e. in Zs category) in Unicode 6.3.0, even though it was in previous versions of the standard.
 */
const MONGOLIAN_VOWEL_SEPARATOR = '\u180E';

/**
 * より細い空白
 *
 */
const HAIR_SPACE = '\u200A';

/**
 * ゼロ幅空白
 */
const ZERO_WIDTH_SPACE = '\u200B';

/**
 * ゼロ幅非接合子 [ZWNJ]
 *
 * > 合字を使用する文字体系のコンピュータ化で用いられる制御文字である。
 * > 本来ならば合字として連結される2つの文字の間にZWNJが置かれると、その2つの文字はそれぞれ末尾形および頭字形で表示される。
 * > スペースを間に置くことでも同じ効果は得られるが、スペースよりも両者の文字を近づけたい、または単語と形態素を連結したい場合にZWNJが用いられる。
 */
const ZERO_WIDTH_NON_JOINER = '\u200C';

/**
 * ゼロ幅接合子 [ZWJ]
 *
 * > アラビア文字やブラーフミー系文字のような複雑な表記体系のコンピュータによる組版において使われる制御文字である。
 * > 本来ならば接合しない形で表示される文字の後ろにゼロ幅接合子が置かれると、接合する形で表示される。
 * > 2つの絵文字の間にZWJが置かれると、新しい形が表示されることもある。
 * > たとえば、2人の大人の絵文字と1人または2人の子供の絵文字をZWJでつなぐと家族の絵文字が表示される。
 */
const ZERO_WIDTH_JOINER = '\u200D';

/**
 * 単語結合子
 *
 * > 日本語などのわかち書きをしない言語においては、改行は文章の途中の任意の位置で行われるが、単語の途中など改行してほしくない箇所に単語結合子を入れることで、その場所では改行されなくなる。
 * > このコードはUnicode バージョン3.2（2002年発行）でU+2060 word joiner (HTML: &#8288;)として定義された。
 * > それ以前より、Unicodeには同じ働きをするゼロ幅ノーブレークスペース(ZWNBSP: zero width no-break space)が存在していた。
 * > しかし、そのコードポイント U+FEFF はファイルの先頭のバイトオーダーマークとしても使用されている。
 * > この曖昧さを避けるために、ゼロ幅ノーブレークスペースと完全に同じ意味と使用法を持つ単語結合子がUnicode 3.2で追加され、「単語結合の意味では新しい文字だけを使うことを強く推奨する」としている。
 */
const WORD_JOINER = '\u2060';

/**
 * Line separator
 */
const LINE_SEPARATOR = '\u2028';

/**
 * Paragraph separator
 */
const PARAGRAPH_SEPARATOR = '\u2028';

/**
 * 狭いノーブレークスペース
 */
const NARROW_NO_BREAK_SPACE = '\u202F';

/**
 * Medium mathematical space
 *
 * > MMSP. Used in mathematical formulae.
 * > Four-eighteenths of an em.
 * > In mathematical typography, the widths of spaces are usually given in integral multiples of an eighteenth of an em, and 4/18 em may be used in several situations,
 * > for example between the a and the + and between the + and the b in the expression a + b.
 * >  HTML/XML named entity: &MediumSpace;
 */
const MEDIUM_MATHMETICAL_SPACE = '\u205F';

/**
 * 全角空白
 */
const IDEOGRAPHIC_SPACE = '\u3000';

/**
 * ゼロ幅ノーブレークスペース
 */
const ZERO_WIDTH_NO_BREAK_SPACE = '\uFEFF';

/**
 * ホワイトスペース（空白文字）類
 *
 * 改行（`\r|\n|\r\n`）は含まない
 *
 */
export const SPACE_CHARS = [
  CHARACTER_TABULATION,
  LINE_TABULATION,
  FORM_FEED,
  SPACE,
  NEXT_LINE,
  NO_BREAK_SPACE,
  EN_QUAD,
  EM_QUAD,
  EN_SPACE,
  EM_SPACE,
  THREE_PER_EM_SPACE,
  FOUR_PER_EM_SPACE,
  SIX_PER_EM_SPACE,
  FIGURE_SPACE,
  PUNCTUATION_SPACE,
  THIN_SPACE,
  MONGOLIAN_VOWEL_SEPARATOR,
  HAIR_SPACE,
  ZERO_WIDTH_SPACE,
  ZERO_WIDTH_NON_JOINER,
  ZERO_WIDTH_JOINER,
  WORD_JOINER,
  LINE_SEPARATOR,
  PARAGRAPH_SEPARATOR,
  NARROW_NO_BREAK_SPACE,
  MEDIUM_MATHMETICAL_SPACE,
  IDEOGRAPHIC_SPACE,
  ZERO_WIDTH_NO_BREAK_SPACE
].join('');
