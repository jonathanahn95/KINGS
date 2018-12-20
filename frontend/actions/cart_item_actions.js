import * as CartItemApiUtil from "../util/cart_item_api_util";

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

const receiveCartItems = payload => {
  return {
    type: RECEIVE_ALL_ITEMS,
    payload
  };
};

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
});

export const fetchCartItems = () => {
  return dispatch => {
    return CartItemApiUtil.fetchCartItems().then(items => {
      return dispatch(receiveCartItems(items));
    });
  };
};

export const addToCart = item => {
  return dispatch => {
    return CartItemApiUtil.addToCart(item).then(item => {
      return dispatch(receiveItem(item));
    });
  };
};

export const updateItem = item => {
  return dispatch => {
    debugger;
    return CartItemApiUtil.updateItem(item).then(item => {
      debugger;
      return dispatch(receiveItem(item));
    });
  };
};

export const deleteItem = item => {
  return dispatch => {
    debugger;
    return CartItemApiUtil.deleteItem(item).then(item => {
      debugger;
      return dispatch(removeItem(item));
    });
  };
};
