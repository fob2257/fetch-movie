import axios from 'axios';

export const getDemo = () =>
  axios
    .get('https://reactjsteachingproj.herokuapp.com/users')
    .then(({ data }) => data);
