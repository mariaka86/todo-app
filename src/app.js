import React from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/Header/index';
import Footer from './components/Footer/index'
import Form from './hooks/form';
import ToDo from './components/ToDo/index';
import {useState,useEffect} from 'react';

const App =()=>{
  
    return (
      <React.Fragment>
      <Header/>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Form/>
       <ToDo />
      </MantineProvider>
      <Footer/>
      </React.Fragment>
      
    );
  }
  export default App;