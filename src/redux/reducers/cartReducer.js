import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  cartReducer: 0,
};

 const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (state.cartReducer >= 0) {
        //console.log();
        return {
          ...state,
          cartReducer: state.cartReducer + 1,
        };
      } else {
        return state;
      }
    case DELETE_ITEM:
      if (state.cartReducer > 0) {
        return {
          ...state,
          cartReducer: state.cartReducer - 1,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default cartReducer;