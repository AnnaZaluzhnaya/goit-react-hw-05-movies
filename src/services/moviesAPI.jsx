
import axios from 'axios';

const KEY = 'b732e1e1afcd10d94706b0318ae2f23c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const showPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  
  if (response.status !== 200) {
    throw new Error('Nothing found');
  }

  return response.data;
};

export const showSearchMovies = async (name) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&page=1&query=${name}`);
  
  if (response.status !== 200) {
    throw new Error('Nothing found');
  }

  return response.data;
    
}

export const showMoviesDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
  
  if (response.status !== 200) {
    throw new Error('Nothing found');
  }

  return response.data;
}

export const showMoviesCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`);
  
  if (response.status !== 200) {
    throw new Error('Nothing found');
  }

  return response.data;
  
}

export const showMoviesReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`);
  
  if (response.status !== 200) {
    throw new Error('Nothing found');
  }

  return response.data;
}

