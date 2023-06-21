import { Button, Container, ThemeProvider } from '@mui/material';
// import Appbar from '../components/appbar';
import {OLSection1, OLSection2, OLSection3, OLSection4}  from '../section';
 import theme from "../../styles/theme"
import React from 'react';

const Home = () => {
    return  (
    //   <OLSection1></OLSection1>
  <ThemeProvider theme={theme}>
    <Container
      maxWidth={false} disableGutters>
      <OLSection1></OLSection1>
      <OLSection2></OLSection2>
      <OLSection3></OLSection3>
      <OLSection4></OLSection4>
      
    </Container>
    </ThemeProvider>
    )
  };
  
  export default Home;