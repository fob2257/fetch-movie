import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/searchActions';

const ResultDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const { result: movie, isLoading } = useSelector(state => state.search);

  useEffect(() => {
    const { id } = match.params;

    if (id) dispatch(searchMovieById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {isLoading ? (
        <CircularProgress size={100} color="primary" />
      ) : !movie ? (
        <Typography>Not found!</Typography>
      ) : (
        <>
          <Typography variant="h3">{movie.Title}</Typography>
          <img src={movie.Poster} alt={movie.Title} />
          <Typography>
            <strong>Actors:</strong> {movie.Actors}
          </Typography>
          <Typography>
            <strong>Director:</strong> {movie.Director}
          </Typography>
          <Typography>
            <strong>Rated:</strong> {movie.Rated}
          </Typography>
          <Typography>
            <strong>Country:</strong> {movie.Country}
          </Typography>
          <Typography>
            <strong>Plot:</strong> {movie.Plot}
          </Typography>
        </>
      )}
    </Container>
  );
};

ResultDetailPage.propTypes = {
  match: PropTypes.object
};

export default ResultDetailPage;
