import * as types from "../actionType";

const initialState = {
  total: 0,
  data: [],
  total_price: 0,
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
          total_price: state.total_price + state.data[itemPrice1].price,
        };
      } else {
        return {
          ...state,
          total: state.total + 1,
          data: [...state.data, temp],
          total_price: state.total_price + temp.price,
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
          total_price: state.total_price - state.data[itemPrice].price,
        };
      } else {
        return {
          ...state,
          data: [...removeItem],
          total_price: state.total_price - action.payload.price,
        };
      }
    case types.GET_PRODUCT_TOTAL:
      const total_price = state.data.reduce((initialValue, currentValue) => {
        let { price, total } = currentValue;
        initialValue = initialValue + price * total;
        return initialValue;
      }, 0);
      return {
        ...state,
        total_price,
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
