import React from "react";  
import Todo from "./Components/Todo/index"
const obj=[
    {
        name:"sameer",
        age:25
    },
    {
        name:"ammi",
        age:35
    }
]
const App:React.FC=()=>{
    return(
        <div onClick={e=>alert("clicked")}style={{border:'1px solid red'}}>
            <Todo items={obj}/>
        </div>
    )
}

export default App;