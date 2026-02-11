import profilepic from "./assets/react.svg"
let handleclick=()=>{
    console.log("ouch!!")
}
function Profile(){
    return(
        <img onClick={handleclick} src={profilepic} alt="its a image" />
    );
}
export default Profile;