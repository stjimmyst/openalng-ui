import React from 'react';
import {Box,Button} from '@mui/material';
import Grid from '@mui/material/Grid';

const OLGrid = () => {
    return (
        <Grid container spacing={0} >
          <Grid item xs={2}>
          <Button>Save</Button>
          </Grid>
          <Grid item xs={8}>
          <Button>Save</Button>
          </Grid>
          <Grid item xs={2}>
          <Button>Save</Button>
          </Grid>
        </Grid>
    );
  }
  
  export default OLGrid 