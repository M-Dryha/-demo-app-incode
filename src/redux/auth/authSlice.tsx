import { createSlice } from '@reduxjs/toolkit';
import AuthOperations from './auth-operations';
import { AuthUser } from '../.././types/type';

const initialState = {
  user: {
    password: '',
    username: '',
    displayName: '',
  },
  accessToken: null,
  refreshToken: null,
  isRegister: false,
  isErrorRegister: false,
  isLoggedIn: false,
  isLoggedInLoading: false,
  isRefreshingCurrentUser: false,
  isErrorLogin: false,
} as AuthUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewCredentials: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(AuthOperations.register.pending, state => {
        state.isErrorRegister = false;
        state.isLoggedInLoading = true;
        state.isRegister = false;
      })
      .addCase(AuthOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedInLoading = false;
        state.isRegister = true;
      })
      .addCase(AuthOperations.register.rejected, (state, action) => {
        state.isErrorRegister =
          action.error.message === 'Request failed with status code 400'
            ? 'Something went wrong'
            : 'Correct your data';
        state.isRegister = false;
      })
      .addCase(AuthOperations.signIn.pending, state => {
        state.isErrorLogin = false;
        state.isLoggedInLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(AuthOperations.signIn.fulfilled, (state, action) => {
        state.isErrorLogin = false;
        state.user = action.payload.user;
        state.isLoggedInLoading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(AuthOperations.signIn.rejected, (state, action) => {
        state.isErrorLogin =
          action.error.message === 'Request failed with status code 401'
            ? 'Invalid username or password'
            : 'Something went wrong';
        state.isLoggedInLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(AuthOperations.logOut.fulfilled, (state, _) => {
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(AuthOperations.logOut.rejected, (state, _) => {
        state.isLoggedIn = false;
      });
  },
});
export const { setNewCredentials } = authSlice.actions;
export default authSlice.reducer;
