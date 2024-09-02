import React from "react";
import ReactDOM from 'react-dom';
import './modal.css'
function  Modal2 ({children}){
    return ReactDOM.createPortal (
        <div className="Modal-container">

            <div className="Modal2">
                {children}
            </div>
        </div>,document.getElementById('modal2')
    );
}

export {Modal2}