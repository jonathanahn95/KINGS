import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_DROPDOWN_BUSINESSES = "RECEIVE_DROPDOWN_BUSINESSES";
export const CLEAR_DROPDOWN_LIST = "CLEAR_DROPDOWN_LIST";

export const receiveSearchResults = payload => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    payload
  };
};

export const receiveDropDownList = payload => {
  return {
    type: RECEIVE_DROPDOWN_BUSINESSES,
    payload
  };
};

export const clearDropDownResults = () => {
  return {
    type: CLEAR_DROPDOWN_LIST
  };
};

export const requestSearchResults = searchData => dispatch => {
  debugger;
  return SearchApiUtil.requestSearchResults(searchData).then(results => {
    debugger;
    return dispatch(receiveSearchResults(results));
  });
};

export const requestDropDownList = searchData => dispatch => {
  return SearchApiUtil.requestDropDownList(searchData).then(results => {
    return dispatch(receiveDropDownList(results));
  });
};

export const searchBusinesses = searchData => dispatch => {
  return SearchApiUtil.searchBusinesses(searchData).then(results => {
    return dispatch(receiveSearchResults(results));
  });
};
