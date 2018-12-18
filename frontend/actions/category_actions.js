import * as CategoryApiUtil from "../util/category_api_util";

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_SINGLE_CATEGORY = "RECEIVE_SINGLE_CATEGORY";

const receiveAllCategories = categories => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  };
};

export const fetchAllCategories = () => {
  return dispatch => {
    return CategoryApiUtil.fetchAllCategories().then(categories => {
      return dispatch(receiveAllCategories(categories));
    });
  };
};

const receiveSingleCategory = payload => {
  return {
    type: RECEIVE_SINGLE_CATEGORY,
    payload
  };
};

export const fetchSingleCategory = category => {
  return dispatch => {
    return CategoryApiUtil.fetchSingleCategory(category).then(category => {
      return dispatch(receiveSingleCategory(category));
    });
  };
};
