import { Header } from '@mantine/core';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ToDo from './Components/ToDo/index';
import { AuthContext } from './Context/AuthContext';


const App=()=> {
  
    return (
      <AuthContext>
      <BrowserRouter>
      <Header/>
      <Routes>
        
       <Route path='/'element={<ToDo />}/>
       </Routes>
      </BrowserRouter>

      </AuthContext>
      
    )
  };
  export default App;