import {CreateTodoButton} from '../CreateTodoButton';
import {TodoItem } from '../TodoItem';
import {TodoList } from '../TodoList';
import {TodoCont } from '../TodoCont';
import {TodoSearch} from '../TodoSearch';
import {useLocalStorageItem} from 'e:/Fronted/React/curso-react-intro/src/App/useLocalStorageItem';
import{TodoButtonContainer}from '../TodoButtonContainer';
import './App.css';
import React from 'react';
let newelements
// const defaultTodos =[
//   { text: 'Start the React course' , completed: false },
//   { text:'Finish the app ToDo', completed: true },
//   { text: 'Deploy the project in github pages', completed: false}
// ]

//localStorage.removeItem('TODO_V1')



function App() {
  
  


  const[searchValue, setSearchValue] = React.useState('');

  const[todos, saveTodo] = useLocalStorageItem('TODO_V1', []);

 

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
    console.log('Complete')
    const newItem=[...todos]
    const todoIndex = newItem.findIndex(
      elem => elem.text== text
    );
    if( newItem[todoIndex].completed==true){
      newItem[todoIndex].completed=false;
    }
    else{
    newItem[todoIndex].completed=true;}
    saveTodo(newItem);
  }
  const TodoDelet = (text)=>{
    console.log('Delete')
    const newItem=[...todos]
    const todoIndex = newItem.findIndex(
      elem => elem.text== text
    );
    newItem.splice(todoIndex,1);
    saveTodo(newItem);
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
