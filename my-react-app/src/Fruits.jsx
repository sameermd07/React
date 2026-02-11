function Fruits(){
    let fruits=[
        {
            name: "apple",
            calories: 250
        },
        {
            name: "pineapple",
            calories: 750
        },
        {
            name: "Guava",
            calories: 150
        },
        {
            name: "Banana",
            calories: 25
        },
        {
            name: "orange",
            calories: 75
        }
    ];
    fruits.sort((a,b)=>a.name.localeCompare(b.name))
    let fruitItems=fruits.map(fruit=><li key={fruit.name}>{fruit.name}:{fruit.calories}</li>)
    return (
        <ol>{fruitItems}</ol>
    );
}
export default Fruits;