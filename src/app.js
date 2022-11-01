import React from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/Header/index';
import Footer from './components/Footer/index'
import ToDo from './components/ToDo/index';
import AddForm from './components/AddForm'
import List from './components/List';
import {useState,useEffect} from 'react';

const App=()=> {
  
    return (
      <React.Fragment>
      <Header/>
      <MantineProvider withGlobalStyles withNormalizeCSS>
       <ToDo />
       <AddForm/>
      </MantineProvider>
      <List/>
      <Footer/>
      </React.Fragment>
      
    )
  };
  export default App;