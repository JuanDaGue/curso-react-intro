
import { CreateTodoButton } from '../CreateTodoButton';
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
  } = React.useContext(TodoContext);
  
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
        <CreateTodoButton icon='+' setOpenModal={setOpenModal}/>
        <CreateTodoButton icon='>' />
      </TodoButtonContainer>

      {openModal && (
        <Modal>
            Adds new ToDos
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };