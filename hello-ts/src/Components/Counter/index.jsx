import React,{useState} from "react";

const CounterApp=()=>{
    const [counter,setCounter]=useState(0);
    const handleIncrement=()=>{
        setCounter(counter+1);
    }
    const handleDecrement=()=>{
        setCounter(counter-1)
    }
    return(
    <div>
    <h1>{counter}</h1>
    <button onClick={handleIncrement}>
        Inc
    </button>
    <button onClick={handleDecrement}>
        Dec
    </button>
    </div>
    );
}
export default CounterApp;