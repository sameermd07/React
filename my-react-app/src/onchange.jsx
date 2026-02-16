import React,{use, useState} from "react";

function OnChangeDemo(){
    let [name,setName]=useState("guest");
    let [number,setNumber]=useState(1);
    let [comment,setComment]=useState("");
    let [payment,setPayment]=useState("");
    let [shipping,setShipping]=useState("Delivery");
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleNumberChange(event){
        setNumber(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>name:{name}</p>
            <input type="number" value={number} onChange={handleNumberChange} />
            <p>number:{number}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="comment"/>
            <p>comment:{comment}</p>
            <select onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option value="2">visa</option>
                <option value="3">cod</option>
                <option value="4">card</option>
            </select>
            <p>selected one:{payment}</p>
            <label>
                <input type="radio" value="pickup" checked={shipping==="pickup"} onChange={handleShippingChange}/>
                pick up
            </label>
            <label>
                <input type="radio"  value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>shipping:{shipping}</p>
        </div>
    )
}
export default OnChangeDemo;