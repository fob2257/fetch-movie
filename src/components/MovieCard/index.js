import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const MovieCard = ({ Title, Year, imdbID, Type, Poster }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSeeMore = () => history.push(`results/${imdbID}`);

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titleGridContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button variant="contained" color="primary" onClick={handleSeeMore}>
            See more
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.any,
  Year: PropTypes.any,
  imdbID: PropTypes.any,
  Type: PropTypes.any,
  Poster: PropTypes.any
};

export default MovieCard;
