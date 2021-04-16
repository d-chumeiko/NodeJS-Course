class UserValidator {
	userValidate = async (ctx, next) => {
		ctx.checkBody({
			email: {
				notEmpty: true,
				isEmail: {
					errorMessage: 'Invalid Email'
				}
			},
			password: {
				notEmpty: true,
				matches: {
					options: [ { min: 2, max: 10 } ]
				},
				errorMessage: 'Invalid Password'
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

module.exports = UserValidator;
