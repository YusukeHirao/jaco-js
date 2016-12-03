"use strict";
const jaco_1 = require("../jaco");
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    return new jaco_1.default(str).isOnlyHiragana();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
exports.default = default_1;
