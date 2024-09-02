import "./CreateTodoButton2.css"
import { IconComplete } from  './IconComplete'
import React from "react";
function CreateTodoButton2(props){
    const [isActive, setIsActive] = React.useState(false);

 const handleClick = () => {
        if (window.confirm('Do you confirm?')) {
          console.log('ok');
        } else {
          console.log('false');
        }
      };
    return(
        <button 
        className="CreatedTodobutton Icon Icon-svg2"
        onClick={handleClick}
        > 
            <IconComplete/>
        </button>
    )
}
export { CreateTodoButton2 };



// import React from 'react';

// const YourComponent = () => {
//   const handleClick = () => {
//     if (window.confirm('Do you confirm?')) {
//       console.log('ok');
//     } else {
//       console.log('false');
//     }
//   };

//   return (
//     <button onClick={handleClick} className="CreatedTodobutton">
//       <span className="Icon Icon-svg Icon-complete">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//           <path d="M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0Z"></path>
//         </svg>
//       </span>
//     </button>
//   );
// };

// export default YourComponent;