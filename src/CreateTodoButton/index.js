import "./CreateTodoButton.css"
function CreateTodoButton(props){
    return(
        <button 
        className="CreatedTodobutton"
        onClick={()=> 
            //console.log('You push the button'), 
            props.setOpenModal(state=>!state)
        }
        
        > {props.icon} </button>
    )
}
export { CreateTodoButton };