export const requestSearchResults = query => {
  return $.ajax({
    method: "GET",
    url: `api/products/search/?${query}`
  });
};
