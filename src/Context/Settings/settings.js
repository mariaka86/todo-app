
import React, { useState} from 'react';
// import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{
const{showCompleted,setShowCompleted}= useState(false);
const [pageItems, setPageItems] = useState(3);
const [sort,setSort] = useState('difficulty');

const values={
  showCompleted,
  pageItems,
  sort,
  setShowCompleted,
  setPageItems,
  setSort,
}
return (
  <SettingsContext.Provider value={values}>
    {children}
  </SettingsContext.Provider>
)
}





export default SettingsProvider;