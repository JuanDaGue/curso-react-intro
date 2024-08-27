import logo from './platzi.webp';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem }from './TodoItem';
import {TodoList }from './TodoList';
import {TodoCont }from './TodoCont';
import{TodoSearch}from './TodoSearch';
import{TodoButtonContainer}from './TodoButtonContainer';
import './App.css';
import React from 'react';

const defaultTodos =[
  { text: 'Start the React course' , completed: false },
  { text:'Finish the app ToDo', completed: true },
  { text: 'Deploy the project in github pages', completed: false}
]
function App() {
  const[searchValue, setSearchValue] = React.useState('');

  const[todos, setTodos] = React.useState(defaultTodos);

  const complete= todos.filter(todo=> !!todo.completed==true).length;
  const counter= todos.length;
  const searchTodo = todos.filter(todo=> { 
      let todoText =todo.text;
      if(todoText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').search(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))>-1){
        return true;
      }
      else{
        return todoText.search(searchValue)>-1;
      }
    }
  )
  console.log(complete,counter)
  console.log('User are searching ToDos')
  console.log(searchValue)
  return (
    <React.Fragment>
      <TodoCont cont={complete}/>
      <TodoSearch searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      <TodoList>
          {searchTodo.map(todo =>(
            <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed= {todo.completed}
            />
          ))}
      </TodoList>

      <TodoButtonContainer>
          < CreateTodoButton icon='+'/>
          < CreateTodoButton icon='>'/>
      </TodoButtonContainer>  
    </React.Fragment>

  );
}




export default App;
