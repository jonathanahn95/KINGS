import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveAllProducts = products => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  };
};

const receiveProduct = product => {
  return {
    type: RECEIVE_PRODUCT,
    product
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
