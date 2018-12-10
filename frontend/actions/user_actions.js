import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_PRODUCT_USER = "RECEIVE_PRODUCT_USER";

const receiveUser = user => {
  return {
    type: RECEIVE_PRODUCT_USER,
    user
  };
};

export const fetchUser = userId => {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(user => {
      return dispatch(receiveUser(user));
    });
  };
};
