var Jaco = require('../lib/jaco.js').default;
var jaco = function (arg) {
	return new Jaco(arg);
};
jaco.Jaco = Jaco;
window.jaco = jaco;
