module jaco {
	/**
	* ## Jacoクラス
	*
	* 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
	*
	* 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
	* ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
	*
	* @version 0.5.0
	* @since 0.1.0
	*/
	export class Jaco {

		/**
		* コンストラクタ
		*
		* ```javascript
		* var a = new Jaco("あああ");
		*
		* // newなしでも生成できる
		* var b = Jaco("あああ");
		* ```
		*
		* @version 0.2.0
		* @since 0.1.0
		* @param str 対象の文字列
		*/
		constructor (str: string | Jaco) {
			if (!(this instanceof Jaco)) { //newつけずに呼んだ際はtrue
				return new Jaco(str);
			}
			this._str = str.toString();
		}

		/**
		* 保持する文字列
		*
		* @version 0.1.0
		* @since 0.1.0
		*/
		private _str: string;

		/**
		* 明示もしくは暗黙の文字列変換メソッド
		*
		* @version 0.1.0
		* @since 0.1.0
		* @return インスタンス自身が保持する文字列
		*/
		public toString (): string {
			return this._str;
		}

		/**
		* 暗黙の値変換に呼び出されるメソッド
		*
		* @version 0.1.0
		* @since 0.1.0
		* @return インスタンス自身が保持する文字列
		*/
		public valueOf (): string {
			return this.toString();
		}

		/**
		* 文字列連結をおこなう
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return インスタンス自身
		*/
		public concat (...likeStrings: any[]): Jaco {
			this._str += likeStrings.join('');
			return this;
		}

		/**
		* 文字列をパターンで置換する
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param pattern  対象のパターン
		* @param replacement 置換する文字列
		* @return インスタンス自身
		*/
		public replace (pattern: string | RegExp, replacement: string): Jaco {
			// TODO: replaceメソッドの型が (string | RexExp) だとコンパイルエラー TSv1.4.1時点
			this._str = this._str.replace(<RegExp> pattern, replacement);
			return this;
		}

		/**
		* 文字位置による抽出
		* (非破壊的メソッド)
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param from 開始インデックス
		* @param to 終了インデックス 省略すると最後まで
		* @return 抽出した文字列からなるJacoインスタンス
		*/
		public slice (from: number, to?: number): Jaco {
			return new Jaco(this._str.slice(from, to));
		}

		/**
		* 指定した位置から指定した数だけ文字列を抽出
		* (非破壊的メソッド)
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param start 開始インデックス
		* @param length 指定数
		* @return 抽出した文字列からなるJacoインスタンス
		*/
		public substr (start: number, length?: number): Jaco {
			return new Jaco(this._str.slice(start, length));
		}

		/**
		* 指定した位置の間の文字列を抽出
		* (非破壊的メソッド)
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param indexA インデックス
		* @param indexB インデックス
		* @return 抽出した文字列からなるJacoインスタンス
		*/
		public substring (indexA: number, indexB: number): Jaco {
			return new Jaco(this._str.substring(indexA, indexB));
		}

		/**
		* 英字の大文字を小文字に変換する
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return インスタンス自身
		*/
		public toLowerCase (): Jaco {
			this._str = this._str.toLowerCase();
			return this;
		}

		/**
		* 英字の小文字を大文字に変換する
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return インスタンス自身
		*/
		public toUpperCase (): Jaco {
			this._str = this._str.toUpperCase();
			return this;
		}

		/**
		* 文字列を取り除く
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param pattern 取り除く文字列
		* @return インスタンス自身
		*/
		public remove (pattern: string | RegExp): Jaco {
			return this.replace(pattern, '');
		}

		/**
		* 先頭と末尾の空白を取り除く
		*
		* [\s]で判定するのでほとんどの空白文字はヒットする
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return インスタンス自身
		*/
		public trim (): Jaco {
			return this.remove(/^\s*|\s*$/g);
		}

		/**
		* 文字列の長さを返す
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return 文字列数
		*/
		public size (): number {
			return this._str.length;
		}

		/**
		* 文字列のバイトサイズを返す
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return バイト数
		*/
		public byteSize (): number {
			return encodeURIComponent(this._str).replace(/%../g, 'x').length;
		}

		/**
		* 文字が空かどうか
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return 結果の真偽
		*/
		public isEmpty (): boolean {
			return this._str === '';
		}

		/**
		* コピーを生成する
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return コピー
		*/
		public clone (): Jaco {
			return new Jaco(this._str);
		}

		/**
		* パターンとマッチするかどうか
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param pattern パターン
		* @return 結果の真偽
		*/
		public test (pattern: string | RegExp): boolean {
			var res: boolean;
			if (typeof pattern === 'string') {
				res = this._str === pattern;
			} else {
				res = pattern.test(this._str);
			}
			return res;
		}

		/**
		* 前方結合
		*
		* ```javascript
		* new Jaco("あああ").prepend("いいい").toString() // => "いいいあああ"
		* ```
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param element 結合する文字列
		* @return インスタンス自身
		*/
		public prepend (element: string | Jaco): Jaco {
			this._str = new Jaco(element).concat(this).toString();
			return this;
		}

		/**
		* 後方結合
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param element 結合する文字列
		* @return インスタンス自身
		*/
		public append (element: string | Jaco): Jaco {
			return this.concat(element);
		}

		/**
		* 完全マッチ
		*
		* @version 0.2.0
		* @since 0.2.0
		* @param target 比較する文字列
		* @return 結果の真偽
		*/
		public is (target: string | Jaco): boolean {
			return this._str === target.toString();
		}

		/**
		* 該当の文字を含んでいるかどうか
		*
		* @version 0.3.0
		* @since 0.3.0
		* @param target 比較する文字列
		* @return 結果の真偽
		*/
		public has (target: string | Jaco): boolean {
			return this._str.indexOf(target.toString()) !== -1;
		}

		/**
		* 該当の文字だけで構成されているかどうか
		*
		* @version 1.1.0
		* @since 0.2.0
		* @param characters 文字セット
		* @return 結果の真偽
		*/
		public isOnly (characters: string | Jaco): boolean {
			return this.test(new RegExp('^[' + characters + ']+$', 'gm'));
		}

		/**
		* ひらがなだけで構成されているかどうか
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return 結果の真偽
		*/
		public isOnlyHiragana (): boolean {
			return this.isOnly(HIRAGANA_CHARS + KANA_COMMON_CAHRS);
		}

		/**
		* カタカナだけで構成されているかどうか
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return 結果の真偽
		*/
		public isOnlyKatakana (): boolean {
			return this.isOnly(KATAKANA_CHARS + KANA_COMMON_CAHRS);
		}

		/**
		* 数字だけで構成されているかどうか
		*
		* @version 0.5.0
		* @since 0.5.0
		* @param negative 負の数値も含めてチェックするかどうか
		* @param floatingPoint 小数としてチェックするかどうか
		* @return 結果の真偽
		*/
		public isNumeric (negative: boolean = true, floatingPoint: boolean = true): boolean {
			var pattern: string = '^';
			if (negative) {
				pattern += '-?';
			}
			if (floatingPoint) {
				pattern += '(?:[0-9]*\\.)?';
			}
			pattern += '[0-9]+$';
			return this.test(toRegExp(pattern));
		}

		/**
		* 数値に変換する
		*
		* @version 0.2.0
		* @since 0.2.0
		* @return 数値
		*/
		public toNumber (): number {
			return parseFloat(this._str);
		}

		/**
		* 数字に変換する
		*
		* @version 0.5.0
		* @since 0.5.0
		* @param negative 負の値を許可してマイナスをつけるかどうか
		* @param floatingPoint 小数を許可してドットをつけるかどうか
		* @return インスタンス自身
		*/
		public toNumeric (negative: boolean = false, floatingPoint: boolean = false): Jaco {
			// 半角化
			this.toNarrow();
			// 数字・ハイフン（マイナス）・ドット意外を削除
			this.remove(/[^0-9\.\-]/gm);
			if (negative) {
				// 最初のにくるハイフンをnに一時的に変換
				this.replace(/^-/, 'n');
			}
			// ハイフンを全て削除
			this.remove(/-/g);
			if (negative) {
				// ハイフンを元に戻す
				this.replace('n', '-');
			}
			if (floatingPoint) {
				// 文字列中で一番最初にくるドットを_に一時的に変換
				this.replace(/\.([0-9])/, '_$1');
			}
			// ドットを全て削除
			this.remove(/\./g);
			if (floatingPoint) {
				// ドットを元に戻す
				this.replace('_', '.');
			}
			return this;
		}

		/**
		* 濁点・半濁点を結合文字に変換
		*
		* @version 0.2.0
		* @since 0.1.0
		* @return インスタンス自身
		*/
		public combinate (): Jaco {
			// 濁点・半濁点を結合文字に変換
			return this.replaceMap({
				// 濁点
				'\u309B': '\u3099',
				// 半濁点
				'\u309C': '\u309A'
			});
		}

		/**
		* ひらがなに変換する
		*
		* @version 0.2.0
		* @since 0.1.0
		* @param isCombinate 濁点・半濁点を結合文字にするかどうか
		* @return インスタンス自身
		*/
		public toHiragana (isCombinate: boolean = false): Jaco {
			// 半角カタカナを全角カタカナへ
			this.toWideKatakana();
			// ヷヸヹヺの変換
			this.replaceMap({
				'ヷ': 'わ゛',
				'ヸ': 'ゐ゛',
				'ヹ': 'ゑ゛',
				'ヺ': 'を゛'
			});
			// カタカナをひらがなへ(Unicodeの番号をずらす)
			this._shift(toPattern(KATAKANA_CHARS), -96);
			// 濁点・半濁点を結合文字に変換
			if (isCombinate) {
				this.combinate();
			}
			return this;
		}

		/**
		* カタカナに変換する
		*
		* @version 0.2.0
		* @since 0.1.0
		* @param toWide 半角カタカナを全角カタカナへ変換するかどうか
		* @return インスタンス自身
		*/
		public toKatakana (toWide: boolean = true): Jaco {
			// 半角カタカナを全角カタカナへ
			if (toWide) {
				this.toWideKatakana();
			}
			// わ゛=> ヷ (濁点3種類対応)
			this.replace(/\u308F(?:\u309B|\u3099|\uFF9E)/g, '\u30F7');
			// ゐ゛=> ヸ (濁点3種類対応)
			this.replace(/\u3090(?:\u309B|\u3099|\uFF9E)/g, '\u30F8');
			// ゑ゛=> ヹ (濁点3種類対応)
			this.replace(/\u3091(?:\u309B|\u3099|\uFF9E)/g, '\u30F9');
			// を゛=> ヺ (濁点3種類対応)
			this.replace(/\u3092(?:\u309B|\u3099|\uFF9E)/g, '\u30FA');
			// ひらがなをカタカナへ(Unicodeの番号をずらす)
			this._shift(toPattern(HIRAGANA_CHARS), 96);
			return this;
		}

		/**
		* 半角カタカナに変換する
		*
		* @version 0.6.0
		* @since 0.1.0
		* @param fromHiragana ひらがなも変換する
		* @return インスタンス自身
		*/
		public toNarrowKatakana (fromHiragana: boolean = false): Jaco {
			// ひらがなを一旦全角カタカナに変換する
			if (fromHiragana) {
				this.toKatakana();
			}
			// 濁点の変換 (全角濁点2種類対応)
			this.replace(/\u309B|\u3099/g, '\uFF9E');
			// 半濁点の変換 (全角半濁点2種類対応)
			this.replace(/\u309C|\u309A/g, '\uFF9F');
			// カタカナの変換
			this.replaceMap({
				'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ', 'ャ': 'ｬ',
				'ュ': 'ｭ', 'ョ': 'ｮ', 'ッ': 'ｯ',
				'ヵ': 'ｶ', 'ヶ': 'ｹ',
				'ヮ': 'ﾜ',
				'ー': 'ｰ',
				'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
				'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
				'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
				'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
				'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
				'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
				'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
				'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
				'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
				'ワ': 'ﾜ', 'ン': 'ﾝ', 'ヰ': 'ｲ', 'ヱ': 'ｴ', 'ヲ': 'ｦ',
				'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
				'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
				'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
				'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
				'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
				'ヷ': 'ﾜﾞ', 'ヸ': 'ｲﾞ', 'ヴ': 'ｳﾞ', 'ヹ': 'ｴﾞ', 'ヺ': 'ｦﾞ'
			});
			return this;
		}

		/**
		* 全角カタカナに変換する
		*
		* @version 0.2.0
		* @since 0.1.0
		* @return インスタンス自身
		*/
		public toWideKatakana (): Jaco {
			// カタカナ・濁点・半濁点の変換
			this.replaceMap({
				'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
				'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
				'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
				'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
				'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
				'ﾜﾞ': 'ヷ', 'ｲﾞ': 'ヸ', 'ｳﾞ': 'ヴ', 'ｴﾞ': 'ヹ', 'ｦﾞ': 'ヺ',
				'ﾞ': '゛', 'ﾟ': '゜',
				'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
				'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
				'ｯ': 'ッ', 'ｰ': 'ー',
				'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
				'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
				'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
				'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
				'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
				'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
				'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
				'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
				'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
				'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン'
			});
			return this;
		}

		/**
		* 日本語で使われる記号を半角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toNarrowJapneseSymbol (): Jaco {
			this.replaceMap({
				'。': '｡',
				'「': '｢',
				'」': '｣',
				'、': '､',
				'・': '･'
			});
			return this;
		}

		/**
		* 日本語で使われる記号を全角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toWideJapneseSymbol (): Jaco {
			this.replaceMap({
				'｡': '。',
				'｢': '「',
				'｣': '」',
				'､': '、',
				'･': '・'
			});
			return this;
		}

		/**
		* カタカナと日本語で使われる記号を半角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toNarrowJapnese (): Jaco {
			// 半角カタカナへ
			this.toNarrowKatakana();
			// 半角記号へ
			this.toNarrowJapneseSymbol();
			return this;
		}

		/**
		* カタカナと日本語で使われる記号を全角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toWideJapnese (): Jaco {
			// 全角カタカナへ
			this.toWideKatakana();
			// 全角記号へ
			this.toWideJapneseSymbol();
			return this;
		}

		/**
		* 半角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toNarrow (convertJapaneseChars: boolean = false): Jaco {
			// スペースの変換
			this.replace(toPattern(SPACE_CHARS), ' ');
			// 半角英数記号の変換
			this._shift(toPattern(FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
			if (convertJapaneseChars) {
				// 日本語カタカナ記号の変換
				this.toNarrowJapnese();
			}
			return this;
		}

		/**
		* 全角に変換
		*
		* @version 0.4.0
		* @since 0.4.0
		* @return インスタンス自身
		*/
		public toWide (): Jaco {
			// スペースの変換
			this.replace(' ', '\u3000');
			// 日本語カタカナ記号の変換
			this.toWideJapnese();
			// 半角英数記号の変換
			this._shift(toPattern(ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
			return this;
		}

		/**
		* 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
		*
		* @version 0.2.0
		* @since 0.1.0
		* @param needle 対象のパターン
		* @param shiftNum ずらす数値
		* @return インスタンス自身
		*/
		private _shift (needle: RegExp, shiftNum: number): Jaco {
			this._str = this._str.replace(needle, (char: string): string => {
				return String.fromCharCode(char.charCodeAt(0) + shiftNum);
			});
			return this;
		}

		/**
		* キーがパターン・値が置換文字列のハッシュマップによって置換する
		*
		* @version 0.1.1
		* @since 0.1.0
		* @param  convMap キーがパターン・値が置換文字列のハッシュマップ
		* @return インスタンス自身
		*/
		public replaceMap (convMap: { [target: string]: string; }): Jaco {
			var needle: string;
			var replace: string;
			for (needle in convMap) {
				if (convMap.hasOwnProperty(needle)) {
					replace = convMap[needle];
					this._str = this._str.replace(toRegExp(needle), replace);
				}
			}
			return this;
		}

	}

	/**
	* キャラクターリストを正規表現に変換する
	*
	* @version 0.1.0
	* @since 0.1.0
	* @param chars 文字の集合
	* @return 正規表現化された文字セット
	*/
	function toPattern (chars: string): RegExp {
		return new RegExp('[' + chars + ']', 'g');
	}

	/**
	* 文字列を正規表現に変換する
	*
	* @version 0.1.0
	* @since 0.1.0
	* @param str 対象の文字列
	* @param option 正規表現のオプション `"i"`:小大文字無視 `"g"`:すべてにマッチ `"m"`:複数行にマッチ
	* @return 正規表現化された文字
	*/
	function toRegExp (str: string, option: string = 'igm'): RegExp {
		return new RegExp(str, option);
	}

}

