import React from "react";
import TodoItem from "./todoitem/index";
import "./style.css"
interface ITodoItem{
    name:string,
    age:number
}

interface TodoProps{
    items:ITodoItem[]
}
const Todo:React.FC<TodoProps>=(props)=>{
    return(
        <div className="todo-container">
            <ol>
                {items.map((item)=>(
               <TodoItem title={item.name}/>
            ))}
            </ol>
        </div>
    )
}

export default Todo;