export const fetchAllCategories = () => {
  return $.ajax({
    method: "GET",
    url: "api/categories"
  });
};

export const fetchSingleCategory = category => {
  return $.ajax({
    method: "GET",
    url: `api/categories/${category.id}`
  });
};
