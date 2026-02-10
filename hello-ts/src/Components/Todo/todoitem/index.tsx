import React  from "react";
import "./style.css"

interface ToDoParams{
    title:String;
}
const TodoItem:React.FC<ToDoParams>=(props)=>{
    return(
        <li>{props.title}</li>
    )
}
export default TodoItem;