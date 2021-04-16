const redis = require('redis');
const axios = require('axios');

const redisClient = redis.createClient({
	host: 'redis-server',
	port: 6379
});

redisClient.on('error', err => {
	console.log('Error ' + err);
});

function searchAndCasheWikiData(req, res) {
	const query = req.params.query.trim();
	const searchUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${query}`;

	return redisClient.get(`wikipedia:${query}`, (err, result) => {
		if (result) {
			const resultJSON = JSON.parse(result);
			return res.status(200).json(resultJSON);
		}

		return axios(searchUrl)
			.then(response => {
				redisClient.setex(
					`wikipedia:${query}`,
					3600,
					JSON.stringify({ source: 'Redis Cache', ...response.data })
				);
				return res.status(200).json({ source: 'Wikipedia API', ...responsedata });
			})
			.catch(err => {
				return res.json(err);
			});
	});
}

module.exports.searchAndCasheWikiData = searchAndCasheWikiData;
