import React from 'react';
import {Box,Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import { OLButton,OLMenuItem, OLBox } from '../../styles/ol';

const OLMenu = () => {
    return (
               <Grid container spacing={0} >
          <Grid item xs={4}>
            <OLBox>
          <OLMenuItem>Main</OLMenuItem>
          </OLBox>
          </Grid>
          <Grid item xs={4}>
          <OLBox>
          <OLMenuItem>Writing</OLMenuItem>
          </OLBox>
          </Grid>
          <Grid item xs={4}>
          <OLBox>
          <OLMenuItem>Speaking</OLMenuItem>
            </OLBox>
          </Grid>
        </Grid>
        

    );
  }
  
  export default OLMenu 