import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchAllChampions = async function () {
  try {
    const response = await api.get('/champion');

    return response.data;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
  }
};
