// import "./card.css"
import profilepic from "./assets/react.svg"
function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="this is image" />
            <h2>Bro code</h2>
            <p>Iam a Java Developer</p>
        </div>
    )
}
export default Card;