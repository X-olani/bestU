import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { foodData } from "./data";
import axios from "axios";
import { updateExpression } from "@babel/types";
const initialState = {
  foodType: null,
  food: foodData,
  orderList: [],
  returnBack: "",
  deleteCount: 0
};
export const Selected_FoodType = args => {
  let foodnum = args;

  return {
    type: "SELECTED_FOODTYPE",
    select: foodnum
  };
};
export const Open_Close = args => {
  return {
    type: "OPEN_CLOSE",
    pageBack: args
  };
};
export const Close = args => {
  return {
    type: "CLOSE"
  };
};
export const Remove_From_list = args => {
  console.log(args);
  return {
    type: "REMOVE_FROM_LIST",
    foodItem: args
  };
};
export const Selected_Food = nameOfFood => {
  console.log(nameOfFood);
  return {
    type: "SELECTED_FOOD",
    order: nameOfFood
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_FOODTYPE":
      return { ...state, foodType: action.select };
    case "SELECTED_FOOD":
      let order = action.order;
      let newOrderList = state.orderList;
      console.log(order);
      let aa = newOrderList.concat(order);

      return { ...state, orderList: aa, deleteCount: aa.length };
    case "OPEN_CLOSE":
      return { ...state, foodType: "orderedList", returnBack: action.pageBack };
    case "CLOSE":
      return { ...state, foodType: state.returnBack };
    case "REMOVE_FROM_LIST":
      let upDated = state.orderList;
      let inc = state.deleteCount;
      inc = inc - 1;
      upDated.splice(action.foodItem, 1);

      return { ...state, orderList: upDated, deleteCount: inc };

    default:
      return state;
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
