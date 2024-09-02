import "./TodoList.css"
import React from "react";
//import { TodoContext } from "../TodoContext";
function TodoList (props){
    return (
      <ul>
        {props.children} 
      </ul>
    )
  }

  export { TodoList };