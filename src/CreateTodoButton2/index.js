import "./CreateTodoButton2.css"
import { IconComplete } from  './IconComplete'
import React from "react";
function CreateTodoButton2(props){
  const handleClick = () => {
    props.setOpenModal2(state => !state);
    if(props.setOpenModal2){
      const button2 = document.querySelector('.CreatedTodobutton2');
      button2.style.zIndex = '1';
      
          const button = document.querySelector('.CreatedTodobutton');
          button.style.zIndex = '';
      }
  };
    return(
        <button 
        className="CreatedTodobutton2 Icon Icon-svg2"
        onClick={handleClick}
        > 
            <IconComplete/>
        </button>
    )
}
export { CreateTodoButton2 };



// import React from 'react';
