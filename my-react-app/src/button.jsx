function Button(){
    let count=0;
    const handleClick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }else{
            console.log(`${name} stop clicking me`)
        }
    }
    const handleClick2=(e)=>e.target.textContent="ohh fuck!!";
    return(
        <button onDoubleClick={handleClick2}>click me </button>
    )
}
export default Button;