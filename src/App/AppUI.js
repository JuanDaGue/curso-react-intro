
import { CreateTodoButton } from '../CreateTodoButton';
import { CreateTodoButton2 } from '../CreateTodoButton2';
import { CreateTodoButton2 } from '../CreateTodoButton2';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoCont } from '../TodoCont';
import { TodoSearch } from '../TodoSearch';
import { TodoButtonContainer } from '../TodoButtonContainer';
import { TodosLoading } from '../TodosLoading';
import './App.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { Modal2 } from '../Modal2';
import { TodoForm } from '../TodoForm';



function AppUI() {
  const {
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
    openModal2, 
    setOpenModal2,
  } = React.useContext(TodoContext);
  //console.log(setActivate)
  // console.log(activatefuntion(true));

  return (
    <React.Fragment>
      <TodoCont cont={complete} counter={counter} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <p> Omg, something is worng ...</p>}
        {!loading && counter.length === 0 && <p> Is time to create to fist ToDo</p>}
        {!loading && searchTodo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => TodoComplet(todo.text)}
            onDelete={() => TodoDelet(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButtonContainer>
        <CreateTodoButton icon='+' setOpenModal={setOpenModal} />
        <CreateTodoButton2 icon='>' setOpenModal2={setOpenModal2} />
       
      </TodoButtonContainer>

      {openModal && (
        <Modal>
            <TodoForm></TodoForm>
            <TodoForm></TodoForm>
        </Modal>
      )}
      {openModal2 && (
        <Modal2>
      <TodoList>
        {loading && <TodosLoading />}
        {error && <p> Omg, something is worng ...</p>}
        {!loading && counter.length === 0 && <p> Is time to create to fist ToDo</p>}
        {!loading && searchTodo.filter(todo => todo.completed).length>0 && searchTodo.filter(todo => todo.completed).map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => TodoComplet(todo.text)}
            onDelete={() => TodoDelet(todo.text)}
          />
        ))}
      </TodoList>
        </Modal2>
      )}
      {openModal2 && openModal  }
    </React.Fragment>
  );
}

export { AppUI };