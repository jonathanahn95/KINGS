export const fetchAllProducts = () => {
  return $.ajax({
    method: "GET",
    url: `/api/products/`
  });
};

export const fetchProduct = product => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${product.id}`
  });
};
