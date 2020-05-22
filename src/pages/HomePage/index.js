import React, { useState } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');

  const handleOnTextChange = ({ target: { value } }) => setSearchText(value);

  const handleOnClear = () => setSearchText('');

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Welcome</Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
        <TextField
          label="Search"
          value={searchText}
          onChange={handleOnTextChange}
        />
        <Grid>
          <Button
            variant="contained"
            onClick={handleOnClear}
            disabled={!searchText.length}
          >
            Clear
          </Button>
          <Button variant="contained" color="primary">
            Go
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default HomePage;
