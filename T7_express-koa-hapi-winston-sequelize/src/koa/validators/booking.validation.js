class BookingValidator {
	createValidator = async (ctx, next) => {
		ctx.checkBody({
			eventId: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid event id'
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
			bookingId: {
				notEmpty: true,
				matches: {
					options: [ { min: 2 } ]
				},
				errorMessage: 'Invalid booking id'
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

module.exports = BookingValidator;
