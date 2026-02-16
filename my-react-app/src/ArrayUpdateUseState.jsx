import React, { useState } from "react";

function FoodList() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);
  const [newFood, setNewFood] = useState("");

  function handleAddFood() {
    if (newFood.trim() === "") return;

    setFoods(prevFoods => [...prevFoods, newFood]);
    setNewFood("");
  }

  function handleRemoveFood(index) {
    setFoods(prevFoods =>
      prevFoods.filter((_, i) => i !== index)
    );
  }

  return (
    <div>
      <h2>Food List</h2>

      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            style={{ cursor: "pointer" }}
          >
            {food}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
        placeholder="Enter food name"
      />

      <button onClick={handleAddFood}>
        Add Food
      </button>
    </div>
  );
}

export default FoodList;
