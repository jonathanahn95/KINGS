export const fetchCategoryProducts = category => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category.id}/products`
  });
};
