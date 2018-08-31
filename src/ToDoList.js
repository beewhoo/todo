import React, {Component} from 'react';
import ListItem from './ListItem';

const ToDoList = props => (
  <li>
  {props.toDoItemArray.map((item,index) => (
    <ListItem doThis={item} key={index} />
  ))}
  </li>
)

export default ToDoList
