import "./TodoSearch.css"
import React from "react";
function TodoSearch({searchValue,setSearchValue}){

    return(
      <input type="text" placeholder="Cut the onios"
      className="CreatedTodobutton"
      value={searchValue}
      onChange={(event)=> {
        setSearchValue(event.target.value);
      }}></input>
    )
  }
export { TodoSearch};