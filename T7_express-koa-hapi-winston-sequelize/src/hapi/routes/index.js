const authRouterConfig = require('./auth');
const bookingsRouterConfig = require('./bookings');
const eventsRouterConfig = require('./events');

module.exports = [].concat(authRouterConfig, bookingsRouterConfig, eventsRouterConfig);
