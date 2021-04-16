const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const directorRoutes = require('./routes/director.routes');
const movieRoutes = require('./routes/movie.routes');
const genreRoutes = require('./routes/genre.routes');
const movieGenreRoutes = require('./routes/movie-genres.routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/directors', directorRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/movie-genres', movieGenreRoutes);

async function start() {
	try {
		await db.sync();
		app.listen(port, () => {
			console.log(`Task4 app listening at http://localhost:${port}`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();
