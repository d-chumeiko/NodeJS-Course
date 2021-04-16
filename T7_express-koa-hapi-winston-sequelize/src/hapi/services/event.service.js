const formatDate = (date) => new Date(date).toISOString();

const transformEvent = (event) => ({
	...event.dataValues,
	...{ date: formatDate(event.date) }
});

class EventService {
	constructor(model, userModel) {
		this.model = model;
		this.userModel = userModel;
	}

	events = async () => {
		const events = await this.model.scope('withUser').findAll({
			include: [
				{
					model: this.userModel.scope('withEvents'),
					as: 'user'
				}
			]
		});

		return events.map((event) => transformEvent(event));
	};

	createEvent = async ({ title, description, price, date }, userId) => {
		const event = await this.model.create({
			title,
			description,
			price,
			date,
			userId
		});

		return await this.model.scope('withUser').findByPk(event.id);
	};

	updateEvent = async (data) => {
		const { id } = data;
		const event = await this.model.scope('withUser').findByPk(id);

		event.dataValues = { ...event.dataValues, ...data };

		await event.save();
		return event;
	};

	deleteEvent = async ({ id }) => {
		const event = await this.model.scope('withUser').findByPk(id);
		await event.destroy();
		return event;
	};
}

module.exports = EventService;
