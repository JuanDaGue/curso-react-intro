import React from "react";
import { useLocalStorageItem} from "../App/useLocalStorageItem";

const TodoContext =React.createContext();

function TodoProvider({children}){

  const {item: todos, saveItem :saveTodo, loading, error} = useLocalStorageItem('TODO_V1', []);
    const[searchValue, setSearchValue] = React.useState('');
    const[openModal, setOpenModal] = React.useState(false);
    // console.log(todos)
    const complete= todos.filter(todo=> !!todo.completed===true).length;
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
    const addTodo= (text)=>{
      const newTodo =[...todos]
      newTodo.push({
        text,
        completed:false,
      })
      saveTodo(newTodo);
    }
    const TodoComplet = (text) =>{
      const newItem=[...todos]
      const todoIndex = newItem.findIndex(
        elem => elem.text=== text
      );
      if( newItem[todoIndex].completed===true){
        newItem[todoIndex].completed=false;
      }
      else{
      newItem[todoIndex].completed=true;}
      saveTodo(newItem);
    }

    const TodoDelet = (text)=>{
      const newItem=[...todos]
      const todoIndex = newItem.findIndex(
        elem => elem.text === text
      );
      newItem.splice(todoIndex,1);
      saveTodo(newItem);
    }
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            counter,
            complete,
            searchTodo,
            searchValue,
            setSearchValue,
            TodoComplet,
            TodoDelet,
            openModal, 
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export{TodoContext, TodoProvider}