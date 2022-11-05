import {useContext,useState} from 'react';
import {If,Then,Else} from 'react-if';

import { AuthContext } from '../../Context/AuthContext'
import { Button, Group, TextInput } from '@mantine/core';

const Login = () =>{
  const[username,setUsername]= useState('')
  const [password,setPassword]= useState('')

const{
  loggedIn,
  login,
  logout,

}= useContext(AuthContext);

const handlerLogout = ()=>{
  setUsername('');
  setPassword('');
  logout();
}



return (
  <>
  <If condition ={loggedIn}>
  <Then>
    <Button color= "red " onClick ={handlerLogout}> Log Out</Button>
  </Then>
  <Else>
    <Group>
      <Then>
        <TextInput name ="username"onChange ={(e)=> setUsername(e.target.value)} placeholder= "Username"/>
        <TextInput name = "password"onChange ={(e)=> setPassword(e.target.value)} placeholder= "Password"/>

        <Button color="green" onClick={() => login(username, password)} type="submit">Login</Button>

    
      </Then>
    </Group>
  </Else>
  
  </If>
  
   </>
)
}
export default Login;