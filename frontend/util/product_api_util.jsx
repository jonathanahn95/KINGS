export const fetchCategoryProducts = category => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category.id}/products`
  });
};
