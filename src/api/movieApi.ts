import axios from 'axios';

export const getMovies = (page: string | (string | null)[] | null) => axios.get(`https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=30&page=${page}`);

export const getPopularMovies = () => axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=download_count');
