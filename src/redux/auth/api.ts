import axios from 'axios';
import { getAccessToken, getRefreshToken } from './selectors';
// import { useAppSelector } from '../../helpers/hooks/hook';
import { setNewCredentials } from './authSlice';
import { User, UserSignIn } from '../.././types/type';

let store: any;
export function setStore(appStore: any) {
  store = appStore;
}

const api = axios.create({
  baseURL: 'https://expa.fly.dev',
});

api.interceptors.request.use(
  config => {
    const accessToken: any = getAccessToken(store.getState());
    const refreshToken = getRefreshToken(store.getState());

    if (accessToken && accessToken !== refreshToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  async response => {
    if (response?.data?.status !== 401) return response;
    if (response.data.status === 401) {
      const originalRequest = response.config;
      console.log('originalRequest', originalRequest);
    }
    return response;
  },
  async error => {
    if (
      error.response.status === 401 &&
      error.response.config.url !== '/auth/refresh' &&
      error.response.config.url !== '/auth/login' &&
      error.response.config.url !== '/users/self'
    ) {
      const tokenToRefresh = getRefreshToken(store.getState());
      const { data } = await getRefreshTokenUser(tokenToRefresh);
      store.dispatch(
        setNewCredentials({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        })
      );
      error.response.config.headers = {
        ...error.response.config.headers,
        Authorization: data.accessToken,
      };
      return axios(error.response.config);
    }
    return Promise.reject(error);
  }
);

export const signUpUser = (credentials: User) =>
  api.post('/auth/register', credentials);
export const signInUser = (credentials: UserSignIn) =>
  api.post('/auth/login', credentials);

export const getRefreshTokenUser = (refreshToken: string | null) =>
  api.post('/auth/refresh', { refreshToken });

export const getCurrentUser = () => api.get('/users/self');

export const logOutUser = () => api.get('/auth/logout');
