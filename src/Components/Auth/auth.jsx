import { useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/AuthContext';

const Auth = ({capability,children}) => {
  const {loggedIn, can} = useContext(AuthContext);

  return (
    <When condition={loggedIn && can(capability)}>
      {children}
    </When>
  )
}

export default Auth;