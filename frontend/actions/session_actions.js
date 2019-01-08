import * as SessionAPIUtil from "./../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => {
  return dispatch => {
    return SessionAPIUtil.signup(user).then(user => {
      return (
        dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
      );
    });
  };
};

export const login = user => {
  return dispatch => {
    return SessionAPIUtil.login(user).then(user => {
      return (
        dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
      );
    });
  };
};

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
