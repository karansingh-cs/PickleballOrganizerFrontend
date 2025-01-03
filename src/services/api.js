import axios from 'axios';

// Base URL for the backend API
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

export const fetchTournaments = async () => {
  const response = await API.get('/tournaments');
  return response.data;
};

export const createTournament = async (tournament) => {
  const response = await API.post('/tournaments', tournament);
  return response.data;
};
