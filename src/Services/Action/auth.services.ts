export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return localStorage.setItem("accessToken", accessToken);
};
export const getUserInfo = () => {
  return localStorage.getItem("accessToken");
};

export const removeFromLocalStorage = () => {
  return localStorage.removeItem("accessToken");
};
export const isLoggedIn = () => {
  const authToken = getUserInfo();
  if (authToken) {
    return !!authToken;
  }
};
