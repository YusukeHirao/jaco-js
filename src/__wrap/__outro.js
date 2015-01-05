
	// Exports
	if ('process' in global) {
		module.exports = jaco;
	} else {
		global.jaco = jaco;
	}

}).call((this || 0).self || global);