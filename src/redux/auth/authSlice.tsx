import { createSlice } from '@reduxjs/toolkit';
import AuthOperations from './auth-operations';

type User = {
  password: string;
  username: string;
  displayName: string;
};

interface AuthUser {
  user: User | null;
  // token: string | null;
  accessToken: string;
  refreshToken: string;

  // isErrorRegister: any;
  isErrorRegister: {} | null;
  isLoggedIn: boolean;
  isRefreshingCurrentUser: boolean;
  isErrorLogin: null;
}

const initialState = {
  user: {
    password: '',
    username: '',
    displayName: '',
  },
  accessToken: '',
  refreshToken: '',
  isErrorRegister: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
  isErrorLogin: null,
} as AuthUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(AuthOperations.register.pending, state => {
        state.isErrorRegister = null;
      })
      .addCase(AuthOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(AuthOperations.register.rejected, (state, _) => {
        //  state.isErrorRegister = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(AuthOperations.fetchCurrentUser.pending, state => {
        state.isRefreshingCurrentUser = true;
      })
      .addCase(AuthOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshingCurrentUser = false;
      })
      .addCase(AuthOperations.fetchCurrentUser.rejected, (state, _) => {
        state.isRefreshingCurrentUser = false;
      })
      .addCase(AuthOperations.signIn.pending, state => {
        state.isErrorLogin = null;
      })
      .addCase(AuthOperations.signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(AuthOperations.signIn.rejected, (state, action) => {
        //  state.isErrorLogin = action.payload;
      });

    // [AuthOperations.register.pending](state, action) {
    //   state.isErrorRegister = null;
    // },
    // [AuthOperations.register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    //   state.isErrorRegister = false;
    // },
    // [AuthOperations.register.rejected](state, action) {
    //   state.isErrorRegister = action.payload;
    // },
    // [AuthOperations.logIn.pending](state, action) {
    //   state.isErrorLogin = null;
    // },
    // [AuthOperations.logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [AuthOperations.logIn.rejected](state, action) {
    //   state.isErrorLogin = action.payload;
    // },

    // [AuthOperations.logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [AuthOperations.fetchCurrentUser.pending](state) {
    //   state.isRefreshingCurrentUser = true;
    // },
    // [AuthOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshingCurrentUser = false;
    // },
    // [AuthOperations.fetchCurrentUser.rejected](state) {
    //   state.isRefreshingCurrentUser = false;
    // },
  },
});

export default authSlice.reducer;
