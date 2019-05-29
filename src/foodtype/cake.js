import React from "react";
import "../checkStyle.scss";

export const Cake = ({ getnameOfFood, open_close }) => {
  const order = [
    {
      name: " Chocolate Stout Whoopie Pies",
      recipe: " Cocoa powder,cream cheese"
    },
    { name: " Mont Blanc", recipe: " heavy cream,semisweet chocolate" },
    { name: " Cranberry Flummery", recipe: " orange juice,plain greek yogurt" },
    {
      name: " Churros with Chocolate-Caramel Sauce",
      recipe: " dark chocolate,cinnamon stick"
    },
    { name: "  Meyer Lemon Posset", recipe: " lemon juice,heavy cream" },
    {
      name: " Creamy Frozen Raspberry Mousse",
      recipe: " Frozen raspberries,greek yogurt"
    },
    { name: " Strawberry Pizza", recipe: " Strawberry,cream cheese" }
  ];
  return (
    <div>
      <div id="main-image2" />
      <div className="order-container">
        {order.map((food, index) => {
          return (
            <div onClick={() => getnameOfFood(food)} className="order">
              <p>Dessert: {food.name}</p>
              <p>Recipe: {food.recipe}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => open_close(0)}>open orders</button>
    </div>
  );
};
