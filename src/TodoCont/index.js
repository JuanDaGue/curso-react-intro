import "./TodoCont.css"
function TodoCont(props){
    return (
      <h1>
        I complete the <strong>{props.cont}</strong> of <strong>{props.counter}</strong> task, I gather all the components for the render
      </h1>
    )
  }

  export { TodoCont };