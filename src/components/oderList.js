import React from "react";
import "../checkStyle.scss";

export const Selected_food_list = props => {
  const goBack = () => props.actionClose();
  const removeItem = args => {
    props.getRemove(args);
  };
  console.log(props.orderList);
  return (
    <div className="order-list-container">
      <nav className="selected-food-list">
        <h2>Ordered List</h2>
      </nav>
      <div className="display-list-container">
        <div className="food-container">
          {props.orderList.map((order, index) => {
            return (
              <div className="food-list">
                <div>
                  <h3>{order.name}</h3>
                  <p>{order.recipe}</p>
                </div>
                <div
                  onClick={() => removeItem(index)}
                  className="remove-button"
                >
                  <p>remove</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="items-in-list">
          <p> Items:{props.delete}</p>
        </div>
      </div>
      <div className="go-back-button" onClick={() => goBack()}>
        Back
      </div>
    </div>
  );
};
