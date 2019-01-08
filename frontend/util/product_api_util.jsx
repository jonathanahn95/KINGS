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

export const createProduct = product => {
  return $.ajax({
    method: "POST",
    url: `/api/products/`,
    data: product,
    contentType: false,
    processData: false
  });
};

export const updateProduct = product =>
  $.ajax({
    method: "PATCH",
    url: `/api/products/${product.id}`,
    data: product,
    contentType: false,
    processData: false
  });
