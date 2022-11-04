import {useContext,useState} from 'react';
import {If,Then,Else} from 'react-if';


import { LoginContext } from '../Auth/context.js';
import { Button, Group, TextInput } from '@mantine/core';

const Login = () =>{
  const[username,setUsername]= useState('')
  const [password,setPassword]= useState('')



}

return (
  <>
  <If condition ={loggedIn}>
  <Then>
    <Button color= "red "
  </Then>
  </If>
  
   </>
)