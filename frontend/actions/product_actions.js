import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveAllProducts = payload => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    payload
  };
};

const receiveProduct = payload => {
  return {
    type: RECEIVE_PRODUCT,
    payload
  };
};

export const fetchAllProducts = () => {
  return dispatch => {
    return ProductApiUtil.fetchAllProducts().then(products => {
      return dispatch(receiveAllProducts(products));
    });
  };
};

export const fetchProduct = product => {
  return dispatch => {
    return ProductApiUtil.fetchProduct(product).then(product => {
      return dispatch(receiveProduct(product));
    });
  };
};

export const createProduct = product => {
  return dispatch => {
    return ProductApiUtil.createProduct(product).then(product => {
      return dispatch(receiveProduct(product));
    });
  };
};

export const updateProduct = product => {
  return dispatch => {
    return ProductApiUtil.updateProduct(product).then(product => {
      return dispatch(receiveProduct(product));
    });
  };
};
