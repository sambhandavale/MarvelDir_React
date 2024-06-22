import express from 'express';
import moviesData from '../src/data/movies/movies.js'; 

import phaseRouter from './movies/phaseRoute.js'
import yearRoute from '../routes/movies/yearRoute.js'
import idRoute from '../routes/movies/idRoute.js'

const router = express.Router();

router.get('/', (req, res) => {
    const { title, id, studios, language_code, phase, year, genre } = req.query;
    let filteredMovies = moviesData.movie;

    if (title) {
        filteredMovies = filteredMovies.filter(movie => movie.title === title);
    } else if (id) {
        filteredMovies = filteredMovies.filter(movie => movie.id === id);
    } else if (studios) {
        filteredMovies = filteredMovies.filter(movie => movie.studios.includes(studios));
    } else if (language_code) {
        filteredMovies = filteredMovies.filter(movie => movie.language_code === language_code);
    } else if (phase) {
        filteredMovies = filteredMovies.filter(movie => movie.phase.toString() === phase);
    } else if (year) {
        filteredMovies = filteredMovies.filter(movie => movie.year_of_release.toString() === year);
    } else if (genre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre));
    }

    if (genre && year){
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre) && movie.year_of_release.toString() === year);
    }

    if (genre && phase){
        filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre) && movie.phase.toString() === phase);
    }

    if (filteredMovies.length === 0) {
        res.status(404).json({ error: 'Movie not found' }); 
    } else {
        res.json(filteredMovies);
    }
});

router.use('/phase', phaseRouter);

router.use('/year', yearRoute);

router.use('/id', idRoute);



export default router;
