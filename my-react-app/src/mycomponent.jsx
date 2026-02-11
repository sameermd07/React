import React,{useState} from "react";
function MyComponent(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(18);
    const [isEmployed,setEmployed]=useState(false);
    const updateName=()=>{
        setName("Sameer");
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const updateStatus=()=>{
        setEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={updateAge}>Set Name</button>
            <p>ISEmployed:{isEmployed?"yes":"No"}</p>
            <button onClick={updateStatus}>Set Name</button>
        </div>
    )
}
export default MyComponent;