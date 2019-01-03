import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = payload => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    payload
  };
};

export const requestSearchResults = searchData => dispatch => {
  return SearchApiUtil.requestSearchResults(searchData).then(results => {
    return dispatch(receiveSearchResults(results));
  });
};
