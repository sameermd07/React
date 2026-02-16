import React,{useState} from "react"
function ColorPicker(){
    let [color,setColor]=useState("#ffffff")
    function onColorChange(event){
        setColor(event.target.value);
    }
    return (
        <div className="color-picker-comtainer">
            <div style={{backgroundColor:color}}>
                <h1>color picker</h1>
                <p>color is :{color}</p>
            </div>
            <input type="color" value={color} onChange={onColorChange} />
        </div>
    )
}

export default ColorPicker