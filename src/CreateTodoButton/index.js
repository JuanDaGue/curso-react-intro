import "./CreateTodoButton.css"
import { IconPlus } from "./IconPlus";
function CreateTodoButton(props){
    return(
        <button 
        className="CreatedTodobutton Icon Icon-svg2"
        onClick={()=> 
            //console.log('You push the button'), 
            props.setOpenModal(state=>!state)
        }
        
        > <IconPlus/> </button>
    )
}
export { CreateTodoButton };