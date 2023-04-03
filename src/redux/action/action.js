import * as types from "../actionType";
import axios from "axios";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export const addItemToCart = (items) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: items,
});
export const removeItemFromCart = (items) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: items,
});

export function fetchPosts(skip) {
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get(`https://dummyjson.com/products?limit=8&skip=${skip}`)
      .then((response) => {
        const posts = response.data;
        //   console.log(posts)
        dispatch(fetchPostSuccess(posts));
      })

      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
}
