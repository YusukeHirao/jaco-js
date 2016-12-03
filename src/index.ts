import _naturalKanaOrder from './fn/naturalKanaOrder';
import _naturalKanaSort from './fn/naturalKanaSort';
import _Jaco from './jaco';

// tslint:disable:no-namespace no-mergeable-namespace
namespace jaco {
	'use strict';

	export const naturalKanaOrder = _naturalKanaOrder;
	export const naturalKanaSort = _naturalKanaSort;
	export const Jaco = _Jaco;
}

window['jaco'] = jaco; // tslint:disable-line:no-string-literal
