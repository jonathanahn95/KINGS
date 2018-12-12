export const fetchCategoryProducts = category => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category.id}/products`
  });
};

export const fetchAllProducts = () => {
  return $.ajax({
    method: "GET",
    url: `/api/products/`
  });
};
