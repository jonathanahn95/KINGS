import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_CATEGORY_PRODUCTS = "RECEIVE_CATEGORY_PRODUCTS";
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";

const receiveCategoryProducts = products => {
  return {
    type: RECEIVE_CATEGORY_PRODUCTS,
    products
  };
};

export const fetchCategoryProducts = category => {
  return dispatch => {
    return ProductApiUtil.fetchCategoryProducts(category).then(products => {
      return dispatch(receiveCategoryProducts(products));
    });
  };
};

const receiveAllProducts = products => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  };
};

export const fetchAllProducts = () => {
  return dispatch => {
    return ProductApiUtil.fetchAllProducts().then(products => {
      return dispatch(receiveAllProducts(products));
    });
  };
};
