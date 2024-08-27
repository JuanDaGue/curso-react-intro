import "./TodoButtonContainer.css"
function TodoButtonContainer (props){
    return (
      <div className="buttonContainer">
        {props.children} 
      </div>
    )
  }

  export { TodoButtonContainer };