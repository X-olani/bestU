import React from "react";
import "../checkStyle.scss";

export const Pizza = ({ getnameOfFood, open_close }) => {
  const order = [
    { name: " Pepperoni", recipe: " Pepperoni" },
    { name: " Mushrooms", recipe: " Mushrooms,Sausage egg" },
    { name: " Sausage", recipe: " Sausage,kale Pesto" },
    { name: " Bacon", recipe: " Pea Pesto Flatbread" },
    { name: " Extra Cheese", recipe: " Deep Dish Skillet" },
    { name: " Chicken", recipe: " BBQ chicken" },
    { name: " Pineapple", recipe: " Grilled Ham,Pineapple" }
  ];
  return (
    <div>
      <div id="main-image" />
      <div className="order-container">
        {order.map((food, index) => {
          return (
            <div onClick={() => getnameOfFood(food)} className="order">
              <p>Pizza: {food.name}</p>
              <p>Recipe: {food.recipe}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => open_close(0)}>open orders</button>
    </div>
  );
};
