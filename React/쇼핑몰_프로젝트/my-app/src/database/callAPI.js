import api from '../api/axios';
import { createContext } from 'react';

const callAPI = async () => {
  try {
    const res = await api.get('/mall');
    const result = res.data;
    return result;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export const callAPIResponse = createContext(callAPI());
