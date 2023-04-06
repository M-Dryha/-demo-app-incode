// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser, signInUser, getCurrentUser, logOutUser } from './api';
// import { setNewCredentials } from './authSlice';
// import { useAppDispatch } from '../../helpers/hooks/hook';
import { ISignUpUser, ISignInUser } from '../.././types/type';

const register = createAsyncThunk<ISignUpUser, null, { rejectValue: string }>(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signUpUser(credentials);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const signIn = createAsyncThunk<ISignInUser, null, { rejectValue: string }>(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signInUser(credentials);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logOutUser();
      console.log('data', data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

const fetchCurrentUser = createAsyncThunk<
  ITokens,
  null,
  { rejectValue: string }
>('/users/self', async (__, { rejectWithValue }) => {
  try {
    const { data } = await getCurrentUser();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const AuthOperations = {
  register,
  signIn,
  logOut,
  fetchCurrentUser,
};
export default AuthOperations;
