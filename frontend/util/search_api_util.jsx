export const requestSearchResults = query => {
  return $.ajax({
    method: "GET",
    url: `api/products/search_filter/?${query}`
  });
};

export const requestDropDownList = query => {
  return $.ajax({
    method: "GET",
    url: `/api/products/dropdown/?title=${query}`
  });
};

export const searchBusinesses = query => {
  return $.ajax({
    method: "GET",
    url: `api/products/search/?search=${query}`
  });
};
