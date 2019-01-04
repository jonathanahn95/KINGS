export const requestSearchResults = query => {
  return $.ajax({
    method: "GET",
    url: `api/products/search/?${query}`
  });
};

export const requestDropDownList = query => {
  return $.ajax({
    method: "GET",
    url: `/api/products/dropdown/?title=${query}`
  });
};
