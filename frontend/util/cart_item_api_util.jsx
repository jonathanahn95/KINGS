export const fetchCartItems = () => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_items`
  });
};
export const addToCart = item => {
  return $.ajax({
    method: "POST",
    url: `/api/cart_items`,
    data: { item }
  });
};
export const updateItem = item => {
  return $.ajax({
    method: "PATCH",
    url: `api/cart_items/${item.id}`,
    data: { item }
  });
};
export const deleteItem = item => {
  return $.ajax({
    method: "DELETE",
    url: `api/cart_items/${item}`
  });
};
export const checkOut = () => {
  return $.ajax({
    method: "DELETE",
    url: `api/cart_items/checkout/`
  });
};
