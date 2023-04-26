import * as types from "../actionType";

const initialState = {
  total: 0,
  data: [],
};

const cartReducer = (state = initialState, action) => {
  // firstly will match id of data ;if not than returns -1
  const temp = { ...action.payload, total: 1 };
  //   const itemPrice = state.data.findIndex(
  //     (item) => item.id === action.payload.id
  //   );
  //deleting value from array without changing main array
  const removeItem = state.data.filter((item) => item !== action.payload);

  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      const itemPrice1 = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemPrice1 >= 0) {
        state.data[itemPrice1].total += 1;
        // console.log(state.data.length)
        // basically increase cart-item by 1:- sorted by id;
        return {
          ...state,
          total: state.total + 1,
          data: [...state.data],
        };
      } else {
        return {
          ...state,
          total: state.total + 1,
          data: [...state.data, temp],
        };
      }

    case types.REMOVE_ITEM_FROM_CART:
      //removing item from cart with same id
      const itemPrice = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemPrice >= 0 && state.data[itemPrice].total > 1) {
        state.data[itemPrice].total -= 1;
        return {
          ...state,
          total: state.total - 1,
          data: [...state.data],
        };
      } else {
        return {
          ...state,
          data: [...removeItem],
        };
      }

    default:
      return { ...state };
  }
};

export default cartReducer;
