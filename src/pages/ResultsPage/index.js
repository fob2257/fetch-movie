import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { Container } from '@material-ui/core';

import { searchMovie } from '../../redux/actions/searchActions';

import MovieCard from '../../components/MovieCard';

const ResultsPage = ({ location }) => {
  const dispatch = useDispatch();
  const { results: movies } = useSelector(state => state.search);

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    if (name) dispatch(searchMovie(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {movies.map((obj, i) => (
        <MovieCard key={i} {...obj} />
      ))}
    </Container>
  );
};

ResultsPage.propTypes = {
  location: PropTypes.object
};

export default ResultsPage;
