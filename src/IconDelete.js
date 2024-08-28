import React from "react";
import {TodoIcon} from "./TodoIcon";
function IconDelete({onDelete}){
    return (
        <TodoIcon
            type="delete"
            onClick={onDelete}
        />
    )
}
export {IconDelete}