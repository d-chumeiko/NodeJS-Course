const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, colorize } = format;

const logger = createLogger({
	format: combine(timestamp(), prettyPrint(), colorize()),
	transports: [
		new transports.Console({ level: 'info' }),
		new transports.File({
			filename: 'project.log',
			level: 'info'
		})
	],
	exitOnError: false,
	colorize: true
});

module.exports = logger;
