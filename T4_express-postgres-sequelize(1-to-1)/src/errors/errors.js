function throwServerError(e, res) {
	console.log(e);

	res.status(500).json({
		message: 'Server error'
	});
}

function throwNotFoundError(res) {
	res.status(500).json({
		message: 'Element with such id don found'
	});
}

module.exports = {
	throwServerError,
	throwNotFoundError
};
