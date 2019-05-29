import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./checkStyle.scss";
import { Pizza } from "./foodtype/pizza";
import { Cake } from "./foodtype/cake";
import { Selected_food_list } from "./components/oderList";
import { Component2 } from "./components/component.js";
export const App = props => {
  const getFoodSelect = args => {
    props.getSelected_FoodType(args);
  };
  const getnameOfFood = args => {
    props.getSelected_food(args);
  };
  const open_close = args => {
    props.actionOpen_Close(args);
  };
  const goBack = () => props.actionClose();
  const removeItem = args => {
    props.getRemove(args);
  };
  switch (props.foodType) {
    case null:
      return (
        <div>
          <nav className="food-display">
            <h2 onClick={() => getFoodSelect(null)} className="nav-tabs">
              Menu
            </h2>
            <h2 onClick={() => open_close("orderedList")} className="nav-tabs">
              Ordered list
            </h2>
          </nav>

          <div className="main-container">
            {props.collection.map((food, index) => {
              console.log(food);
              return (
                <div
                  onClick={() => getFoodSelect(index)}
                  className="select-tab"
                >
                  <img src={require("./images/" + food.img)} />
                  <p className="name-of-food">{food.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    case 0:
      return (
        <div>
          <nav className="food-display">
            <h2 onClick={() => getFoodSelect(null)} className="nav-tabs">
              Menu
            </h2>
            <h2 onClick={() => open_close(0)} className="nav-tabs">
              Ordered list
            </h2>
          </nav>
          <button onClick={() => getFoodSelect(null)}>Back</button>
          <Pizza getnameOfFood={getnameOfFood} open_close={open_close} />
        </div>
      );
    case 1:
      return (
        <div>
          <nav className="food-display">
            <h2 onClick={() => getFoodSelect(null)} className="nav-tabs">
              Menu
            </h2>
            <h2 onClick={() => open_close(1)} className="nav-tabs">
              Ordered list
            </h2>
          </nav>
          <button onClick={() => getFoodSelect(null)}>Back</button>
          <Cake getnameOfFood={getnameOfFood} open_close={open_close} />
        </div>
      );
    case "orderedList":
      return <Component2 />;
  }
};
