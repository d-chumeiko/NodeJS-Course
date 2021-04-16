class EventValidator {
	createValidator = async (ctx, next) => {
		ctx.checkBody({
			title: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid title'
			},
			description: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid description'
			},
			price: {
				notEmpty: true,
				isInt: {
					errorMessage: 'Invalid price'
				}
			},
			date: {
				notEmpty: true,
				errorMessage: 'Invalid date'
			}
		});

		let errors = await ctx.validationErrors();

		if (errors) {
			ctx.body = errors;
			ctx.status = 422;
			return;
		}

		await next();
	};

	updateValidator = async (ctx, next) => {
		ctx.checkBody({
			id: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid id'
			},
			title: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid title'
			},
			description: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid description'
			},
			price: {
				notEmpty: true,
				isInt: {
					errorMessage: 'Invalid price'
				}
			},
			date: {
				notEmpty: true,
				errorMessage: 'Invalid date'
			}
		});

		let errors = await ctx.validationErrors();

		if (errors) {
			ctx.body = errors;
			ctx.status = 422;
			return;
		}

		await next();
	};

	deleteValidator = async (ctx, next) => {
		ctx.checkBody({
			id: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid id'
			}
		});

		let errors = await ctx.validationErrors();

		if (errors) {
			ctx.body = errors;
			ctx.status = 422;
			return;
		}

		await next();
	};
}

module.exports = EventValidator;
