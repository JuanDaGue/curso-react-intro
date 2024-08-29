import "./TodoItem.css"
import { IconCheck } from  './IconCheck'
import { IconDelete } from  './IconDelete'

function TodoItem(props){
    return(
    <li className={`TodoIteM ${props.completed && "Icon-check-active"}`}>
      {/* <span className={`Icon Icon-check`} onClick={props.onComplete}> V </span> */}
      <IconCheck onComplete={props.onComplete}/>
      <p className={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
      <IconDelete onDelete={props.onDelete}/>

      {/* <span className='Icon Icon-delete' onClick={props.onDelete}>X </span> */}
    </li>
    );
}
export { TodoItem};
