import * as UserApiUtil from "./../util/user_api_util";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";
export const RECEIVE_USER_PROF_INFO = "RECEIVE_USER_PROF_INFO";

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER_INFO,
    payload
  };
};

export const receiveUserProfInfo = payload => {
  return {
    type: RECEIVE_USER_PROF_INFO,
    payload
  };
};

export const fetchUser = userId => {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(user => {
      return dispatch(receiveUser(user));
    });
  };
};

export const fetchUserProfInfo = userId => {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(user => {
      return dispatch(receiveUserProfInfo(user));
    });
  };
};
