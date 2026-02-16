import React,{useState} from "react";

function Update(){
    let [car,setCar]=useState({
        name:"mustang",
        year:2025,
        model:"xyz"
    })
    function handleChange(event){
        setCar({
            ...car,year:event.target.value
        })
    }
    return(
        <div>
            <p>car:{car.name},{car.year},{car.model}
            </p>
            <input type="number"placeholder="enter year" onChange={handleChange} />
        </div>
    )
}

export default Update;