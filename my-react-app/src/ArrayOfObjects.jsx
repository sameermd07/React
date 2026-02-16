import React,{useState} from "react";

function ArrayOfObjects(){
    let [cars,setCars]=useState([]);
    let [year,setYear]=useState(new Date().getFullYear());
    let [name,setName]=useState("");
    let [model,setModel]=useState("");
    function handleYearChange(event){
        setYear(event.target.value);
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleModelChange(event){
        setModel(event.target.value);
    }
    function handleAddCars(){
        let obj={
            name:name,
            year:year,
            model:model
        }
        setCars([...cars,obj])
    }
    return(
        <div>
            <p>hello</p>
            <ul>{cars.map((car,index)=>(<li key={index}>{car.year}{car.model}{car.name}</li>))}</ul>
            <input type="text" onChange={handleNameChange} value={name}/>
            <input type="number" onChange={handleYearChange} value={year}/>
            <input type="text" onChange={handleModelChange} value={model}/>
            <button onClick={handleAddCars}>Add Car</button>
        </div>
    )
}   

export default ArrayOfObjects;