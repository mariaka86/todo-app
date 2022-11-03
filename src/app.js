import { Header } from '@mantine/core';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ToDo from './components/ToDo/index';


const App=()=> {
  
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
        
       <Route path='/'element={<ToDo />}/>
       </Routes>
      </BrowserRouter>
      
    )
  };
  export default App;