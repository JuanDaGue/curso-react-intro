import React from 'react';
function useLocalStorageItem (itemName, InitialValue) {
  
    let parsedTodo= localStorage.getItem(itemName)
    
    if(localStorage.length<1){
      let defaultTodos =InitialValue
      localStorage.setItem(itemName, JSON.stringify(defaultTodos))
      parsedTodo= localStorage.getItem(itemName)
    }
    else{
      let parsedTodo= localStorage.getItem(itemName)
    }
    const [item, setItem]= React.useState(JSON.parse(parsedTodo));
  
      const saveItem= (newItem)=>{
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
      }
   return [item, saveItem];
  }
 
  export { useLocalStorageItem }