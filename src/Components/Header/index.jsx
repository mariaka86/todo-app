import {createStyles,Header, Navbar,Group} from '@mantine/core'
import{Link} from 'react-router-dom'
import Login from '../Login/login'

const useStyles= createStyles((theme)=>({
  navbar:{
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0]


  },
  h1:{
    backgroundColor:theme.colors.gray[8],
    color: theme.colors.gray[0],
    width:'80%',
    margin:'auto',
    fontSize:theme.fontSizes.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md


  },
  link:{
    textDecoration:"none",
    color:theme.colors.gray[0],
  }
}))

const AppHeader=({incomplete})=> {
  const{classes}= useStyles();
  return (
    <>
      <Header data-testid="todo-header">
        <Navbar className = {classes.navbar}>
          <Group>
            <Link className= {classes.link} to ='/' default>Home</Link>
            <Link className= {classes.link} to ='/settings' default>Settings</Link>
            </Group>
            <Group>
              <Login/>
            </Group>
        </Navbar>
        <h1 className={classes.h1}data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </Header>
    </>
  )
}

    
export default AppHeader;