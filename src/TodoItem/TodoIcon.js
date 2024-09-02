import React from "react";
import { ReactComponent as CheckSVG} from '../Icons/check.svg';
import { ReactComponent as DeleteSVG} from '../Icons/delete.svg';
import { ReactComponent as CompleteSVG} from '../Icons/complete.svg';

const iconTypes={"check":<CheckSVG/>,"delete":<DeleteSVG/>,"complete":<CompleteSVG/>}
function TodoIcon({type, onClick}){
    return(
    <span className={`Icon Icon-svg Icon-${type}`} onClick={onClick} >
        {iconTypes[type]}
    </span>
    )
}
export {TodoIcon};



// import{ReactComponent as CheckSVG}from './check.svg';import{ReactComponent as DeleteSVG}from './delete.svg';import './TodoIcon.css';const iconTypes={"check":(color)=><CheckSVG className="Icon-svg"fill={color}/>,"delete":(color)=><DeleteSVG className="Icon-svg"fill={color}/>,};


// function TodoIcon({type,color,onClick}){return(<span
// className={`Icon-container Icon-container-${type}`}
// onClick={onClick}>{iconTypes[type](color)}</span>)}
// export{TodoIcon};