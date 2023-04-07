export interface UserData {
  password: string;
  username: string;
  displayName: string;
}

export interface LoginData {
  password: string;
  username: string;
}

export type RouteProps = {
  children: JSX.Element;
  redirectTo: string;
  path: string;
};

export type User = {
  password: string;
  username: string;
  displayName: string;
} | null;

export interface ISignUpUser {
  user: User;
}
export interface ISignInUser {
  user: User;
  refreshToken: string;
  accessToken: string;
  isErrorLogin: boolean | string;
  isLoggedIn: boolean;
}

export type UserSignIn = {
  password: string;
  username: string;
} | null;

export interface AuthUser {
  user: User;
  accessToken: string | null;
  refreshToken: string | null;
  isRegister: boolean;
  isErrorRegister: boolean | string;
  isLoggedIn: boolean;
  isLoggedInLoading: boolean;
  isLoggedOut: boolean;
  isErrorLogin: boolean | string;
}
