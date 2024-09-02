import "./TodoSearch.css"
import React from "react";
function TodoSearch({searchValue,setSearchValue}){

    return(
      <input type="text" placeholder="Cut the onios"
      className="SearchTodobutton"
      value={searchValue}
      onChange={(event)=> {
        setSearchValue(event.target.value);
      }}></input>
    )
  }
export { TodoSearch};