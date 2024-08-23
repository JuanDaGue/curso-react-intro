import logo from './platzi.webp';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem }from './TodoItem';
import {TodoList }from './TodoList';
import {TodoCont }from './TodoCont';
import{TodoSearch}from './TodoSearch';
import './App.css';
import React from 'react';

const defaultTodos =[
  { text: 'Start the React course' , conplete: false },
  { text:'Finish the app ToDo', conplete: false },
  { text: 'Deploy the project in github pages', conplete: false}
]
function App() {
  return (
    <React.Fragment>
      <TodoCont cont={1}/>
      <TodoSearch/>
      <TodoList>
          {defaultTodos.map(todo =>(
            <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completd= {todo.conplete}
            />
          ))}
      </TodoList>
      < CreateTodoButton/>
    </React.Fragment>

  );
}




export default App;
