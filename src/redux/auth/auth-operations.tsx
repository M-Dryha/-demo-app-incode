import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {RootState} from '../store';

axios.defaults.baseURL = 'https://expa.fly.dev';
type User = {
  password: string;
  username: string;
  displayName: string;
};

interface AuthUser {
  user: User;
  // token: string | null;
  refreshToken: string;
  // isErrorRegister: any;
  isErrorRegister: string | null;
  isLoggedIn: boolean;
}

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk<AuthUser, null, { rejectValue: string }>(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue('Server Error');
    }
  }
);

const signIn = createAsyncThunk<AuthUser, null, { rejectValue: string }>(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);

// const logOut = createAsyncThunk(
//   '/auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/auth/logout');
//       token.unset();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const fetchCurrentUser = createAsyncThunk<
  AuthUser,
  null,
  { rejectValue: string }
>('auth/refresh', async (_, thunkAPI) => {
  const state: any = thunkAPI.getState();
  const persistedToken = state.auth.refreshToken;

  if (persistedToken === null) {
    thunkAPI.rejectWithValue('No token');
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/self');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error, no data');
  }
});

const AuthOperations = {
  register,
  signIn,
  //   logOut,
  fetchCurrentUser,
};
export default AuthOperations;
