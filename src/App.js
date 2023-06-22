import { Button, Container, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import OLGrid from './components/grid';
import {OLSection1, OLSection2, OLSection3, OLSection4}  from './components/section';
import theme from "./styles/theme"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import About from './components/pages/About';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Speaking from './components/pages/Speaking';
import Writing from './components/pages/Writing';

function App() {
  useEffect(() => {
    document.title = 'OpenLang - AI helper'
  }, []);
  return (
    // <React.StrictMode>
    //   <BrowserRouter>
    //   <ThemeProvider theme={theme}>
    // <Container
    //   maxWidth={false} disableGutters>
    //   <Appbar/>
    //   <OLSection1></OLSection1>
    //   <OLSection2></OLSection2>
    //   <OLSection3></OLSection3>
    //   <OLSection4></OLSection4>
      
    // </Container>
    // </ThemeProvider>
    //   </BrowserRouter>
    
  //   <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     {/* <Route path="/exams" element={<Exams />} />
  //     <Route path="/exams/english" element={<ExamsEnglish />} />
  //     <Route path="/exams/english/celpip" element={<Celpip />} />
  //     <Route path="/exams/english/ielts" element={<Ielts />} />
  //     <Route path="/exams/french" element={<ExamsFrench />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/login" element={<Login />} /> */}
      
  //   </Route>
  // </Routes>
  <Container maxWidth={false} disableGutters>

  <Appbar/>
    <Routes>
    <Route index element={<Home/>}/>
    {/* <Route path="/about" element={<About />} /> */}
    <Route path="/speaking" element={<Speaking />} />
    <Route path="/writing" element={<Writing />} />
  </Routes>
  </Container>

  );
}

export default App;
