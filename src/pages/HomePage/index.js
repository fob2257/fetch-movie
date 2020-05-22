import React, { useState } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { Movie as MovieIcon } from '@material-ui/icons';

import useStyles from './styles';

const HomePage = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handleOnTextChange = ({ target: { value } }) => setSearchText(value);

  const handleOnClear = () => setSearchText('');

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Welcome</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          label="Search"
          value={searchText}
          onChange={handleOnTextChange}
          className={classes.textField}
        />
        <Grid className={classes.buttonsGridContainer}>
          <Button
            variant="contained"
            onClick={handleOnClear}
            disabled={!searchText.length}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.searchButton}
          >
            Go
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default HomePage;
