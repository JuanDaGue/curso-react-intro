import "./TodoItem.css"
function TodoItem(props){
    return(
    <li className={`TodoIteM ${props.completed && "Icon-check-active"}`}>
      <span className={`Icon Icon-check`} onClick={props.onComplete}> V </span>
      <p className={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
      <span className='Icon Icon-delete' onClick={props.onDelete}>X </span>
    </li>
    );
}
export { TodoItem};