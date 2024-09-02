import React from "react";
import './TodoForm.css'
import IconApp from '../TodoForm/IconsForm';
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {
        addTodo, 
        setOpenModal,
    } = React.useContext(TodoContext);

    const [todoValue, SetTodoValue] = React.useState('')

    const onSubmit =  (event)=>{
        event.preventDefault();
        addTodo(todoValue)
        setOpenModal(false);
    }

    const ontext =  (event)=>{
        SetTodoValue(event.target.value);
        console.log(SetTodoValue)
    }
    return(
        <form onSubmit={onSubmit }>
           <label> <strong> Add a new ToDo </strong> </label>
            <textarea placeholder="cut the onion for lunch"
            value={todoValue}
            onChange={ontext}/>
            <button type="submit" className="Form-button"><IconApp ></IconApp></button>
        </form>
    )
}
export {TodoForm}