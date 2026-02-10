function Food(){
    const food1="orange";
    const food2="banana";
    const food3="Apple";
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3}</li>
        </ul>
    )
}
export default Food;