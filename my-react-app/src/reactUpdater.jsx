import React,{useState} from "react";

function UpdaterDemo(){
    let [count,setCount]=useState(0);

    function increment(){
        setCount(prev=>prev+1);
    }
    function increment(){
        setCount(prev=>prev+1);
    }
    function decrement(){
        setCount(prev=>prev-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default UpdaterDemo;