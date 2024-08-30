import React from 'react';
function useLocalStorageItem (itemName, initialValue) {
  
    //let parsedTodo= localStorage.getItem(itemName);
    const [item, setItem]= React.useState(initialValue);
    const [loading, setLoading]= React.useState(true);
    const [error, setError]= React.useState(false);
    React.useEffect(()=>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
          console.log(error)
        }
      }, 2000);
    });

   // setLoading(false);
   const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
  export {useLocalStorageItem};



  // const defaultTodos =[
//   { text: 'Start the React course' , completed: false },
//   { text:'Finish the app ToDo', completed: true },
//   { text: 'Deploy the project in github pages', completed: false}
// ]

//localStorage.removeItem('TODO_V1')

