import "./TodoCont.css"
function TodoCont(props){
    return (
      <h1>
        You have completed <strong>{props.cont}</strong> out of <strong>{props.counter}</strong> tasks. Complete all the ToDos on the list!
      </h1>
    )
  }

  export { TodoCont };