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

  const TodoComplet = (text) =>{
    const newTodos=[...todos]
    const todoIndex = newTodos.findIndex(
      elem => elem.text== text
    );
    if( newTodos[todoIndex].completed==true){
      newTodos[todoIndex].completed=false;
    }
    else{
    newTodos[todoIndex].completed=true;}
    setTodos(newTodos);
  }
  const TodoDelet = (text)=>{
    const newTodos=[...todos]
    const todoIndex = newTodos.findIndex(
      elem => elem.text== text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
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
            onComplete={()=>TodoComplet(todo.text)}
            onDelete={()=>TodoDelet(todo.text)}
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
