import "./TodoItem.css"
function TodoItem(props){
    return(
    <li className={`TodoIteM ${props.completed && "Icon-check-active"}`}>
      <span className={`Icon Icon-check`} onClick={()=> console.log('ToDo was complete')}> V </span>
      <p className={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
      <span className='Icon Icon-delete' onClick={()=> console.log('Todo was delete')}>X </span>
    </li>
    );
}
export { TodoItem};