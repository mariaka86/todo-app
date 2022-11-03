import React from 'react';
import {Badge, Pagination,Card,CloseButton ,Text,createStyles} from '@mantine/core';
import {When} from 'react-if'
import { useContext,useState} from 'react';
import { SettingsContext } from '../../Context/Settings/settings';




const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  }
}))


const List =({list, toggleComplete,deleteItem})=>{
const {classes} = useStyles()
const{pageItems,showCompleted}= useContext(SettingsContext)
const[page,setPage]= useState(1)
// pagination
const listToRender = showCompleted ? list : list.filter(item => !item.complete)

const listStart= pageItems * (page -1);
const listEnd = listStart +  pageItems;
const pageCount = Math.ceil(listToRender.length/pageItems);
const displayList= listToRender.slice (listStart, listEnd);
console.log('displayList',displayList)
  return(
    <>
      {displayList.map(item => (
        <Card key={item.id}>
          <Card.Section withBorder>
          {
            item.complete
            
            ? <Badge color='green' onClick={() => toggleComplete(item.id)}className={classes.badge}>Complete</Badge>
            : <Badge color='red' onClick={() => toggleComplete(item.id)}className={classes.badge}>Pending</Badge>
          }
            <Text>{item.assignee}</Text>
            <CloseButton title ='Delete Task'onClick={()=>deleteItem(item.id)} />
          </Card.Section>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
         </Card>
      ))}
      <When condition = {listToRender.length > 0}>
      <Pagination page ={page} onChange ={setPage} total={pageCount}/>
      </When>
      </>
         )
      }

export default List;