export const getIsLoggedInLoading = (state: {
  auth: { isLoggedInLoading: boolean };
}) => state.auth.isLoggedInLoading;

export const getIsLoggedIn = (state: { auth: { isLoggedIn: any } }) =>
  state.auth.isLoggedIn;

export const getAccessToken = (state: { auth: { accessToken: string } }) =>
  state.auth.accessToken;

export const getRefreshToken = (state: { auth: { refreshToken: string } }) =>
  state.auth.refreshToken;

export const getLoginError = (state: { auth: { isErrorLogin: any } }) =>
  state.auth.isErrorLogin;
