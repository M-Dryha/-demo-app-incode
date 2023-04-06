// import React, { Suspense, lazy } from 'react';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Register from './Register';
// import { useGetUser } from '../helpers/hooks/useGetUser';
// import { useAppSelector } from '../helpers/hooks/hook';
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Loader from './Loader';

import SignIn from './SignIn';
// import { Auth } from '../Pages/Auth';
import { Home } from '../Pages/Home';
import { theme } from '../helpers/MUI-theme';

export const App: React.FC = () => {
  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  // const isRegistered = useAppSelector(state => state.auth.isRegister);

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{}}>
          <Routes>
            {/* {!isRegistered ? (
              <Route path="/" element={<Register />} />
            ) : (
              <Route
                path="/login"
                element={<SignIn password={''} username={''} />}
              />
            )} */}

            {/* <Route path="/*" element={<Auth />} /> */}

            <Route path="/" element={<Register />} />
            {/* <Route
              path="/"
              element={
                <PublicRoute path="/" redirectTo="/login" restricted>
                  <Register />
                </PublicRoute>
              }
            /> */}
            {/* <Route
              path="/"
              element={
                <PublicRoute path="/" redirectTo="/login" restricted>
                  <Register />
                </PublicRoute>
              }
            /> */}
            <Route
              path="/login"
              element={
                <PublicRoute path="/" redirectTo="/home" restricted>
                  <SignIn password={''} username={''} />
                </PublicRoute>
              }
            />
            {/* <Route
              path="/login"
              element={
                <PrivateRoute path="/login" redirectTo="/home">
                  <SignIn password={''} username={''} />
                </PrivateRoute>
              }
            /> */}
            {/* <Route
              path="/login"
              element={<SignIn password={''} username={''} />}
            /> */}

            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};
