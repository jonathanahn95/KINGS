export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  });
};
export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/users/`
  });
};
