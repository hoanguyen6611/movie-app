export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = "1826e7c1f8358d5d6244d4a24eee99c2";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${api_key}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${api_key}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${api_key}`,
  imageOriginal: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  image500: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
  getMovieSearch: (query, page) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`,
};
