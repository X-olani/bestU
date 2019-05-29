import { connect } from "react-redux";
import { App } from "../App";
import { Selected_food_list } from "../components/oderList";
import {
  Selected_FoodType,
  Selected_Food,
  Open_Close,
  Close,
  Remove_From_list
} from "../store";

const mapStateToProps = state => ({
  collection: state.food,
  foodType: state.foodType,
  orderList: state.orderList,
  delete: state.deleteCount
});

const mapDispatchToProps = Dispatch => {
  const getSelected_FoodType = args => Dispatch(Selected_FoodType(args));
  const getSelected_food = args => Dispatch(Selected_Food(args));
  const actionOpen_Close = args => Dispatch(Open_Close(args));
  const actionClose = () => Dispatch(Close());
  const getRemove = args => Dispatch(Remove_From_list(args));
  return {
    getSelected_FoodType: getSelected_FoodType,
    getSelected_food: getSelected_food,
    actionOpen_Close: actionOpen_Close,
    actionClose: actionClose,
    getRemove: getRemove
  };
};

export const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export const Component2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selected_food_list);
