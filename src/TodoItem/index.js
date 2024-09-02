import "./TodoItem.css"
import { IconCheck } from  './IconCheck'
import { IconDelete } from  './IconDelete'

function TodoItem(props){
    return(
    <li className={`TodoIteM ${props.completed && "Icon-check-active"} ${props.activated && 'In'}active`}>
      <IconCheck onComplete={props.onComplete}/>
      <p className={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
      <IconDelete onDelete={props.onDelete}/>
    </li>
    );
}
export { TodoItem};
