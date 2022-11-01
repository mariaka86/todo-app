import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';


const List =({list, toggleComplete})=>{
const{pageItems,showCompleted}= useContext(SettingsContext)
// pagination
const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  return(
    <>
      {listToRender.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
         </div>
      ))}
      </>
         )
      }

export default List;