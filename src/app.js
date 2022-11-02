import React from 'react';
import Header from './components/Header/index';
// import Footer from './components/Footer/index'
import ToDo from './components/ToDo/index';
import AddForm from './components/AddForm'
import List from './components/List';
// import {useState,useEffect} from 'react';

const App=()=> {
  
    return (
      <React.Fragment>
     
       <ToDo />
       <AddForm/>
      
      <List/>
      {/* <Footer/> */}
      </React.Fragment>
      
    )
  };
  export default App;