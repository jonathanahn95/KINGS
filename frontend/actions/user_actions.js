import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_PRODUCT_USER = "RECEIVE_PRODUCT_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

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
const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const fetchAllUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchAllUsers().then(users => {
      return dispatch(receiveAllUsers(users));
    });
  };
};
