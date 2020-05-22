import axios from 'axios';

export const doRequest = async options =>
  axios
    .request({
      baseURL: process.env.REACT_APP_OMDB_API_URL,
      responseType: 'json',
      ...options
    })
    .then(response => (response ? response.data : null));
