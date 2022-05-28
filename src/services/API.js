const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '33bcb89e36b34d36b896a35a11214f25';

async function getMovies(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(response.status));
}

export function fetchTrendingMovies(page) {
  return getMovies(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
}

export function fetchMoviesByID(id) {
  return getMovies(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export function fetchMoviesByQuery(query, page) {
  return getMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
}

export function fetchCredits(id) {
  return getMovies(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export function fetchReviews(id) {
  return getMovies(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
}
