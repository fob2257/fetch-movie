import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Typography, Button } from '@material-ui/core';

const MovieCard = ({ Title, Year, Type, Poster }) => (
  <Card>
    <Grid container>
      <Grid item>
        <img src={Poster} alt={Title} />
      </Grid>
      <Grid item>
        <Typography>{Title}</Typography>
        <Typography>{Year}</Typography>
        <Typography>{Type}</Typography>
        <Button variant="contained" color="primary">
          See more
        </Button>
      </Grid>
    </Grid>
  </Card>
);

MovieCard.propTypes = {
  Title: PropTypes.any,
  Year: PropTypes.any,
  imdbID: PropTypes.any,
  Type: PropTypes.any,
  Poster: PropTypes.any
};

export default MovieCard;
