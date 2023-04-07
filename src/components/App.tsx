import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader';
import { theme } from '../helpers/MUI-theme';
const Home = lazy(() => import('../Pages'));
const Register = lazy(() => import('./Register'));
const SignIn = lazy(() => import('./SignIn'));

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{}}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route
              path="/login"
              element={
                <PrivateRoute path="/login" redirectTo="/home">
                  <SignIn password={''} username={''} />
                </PrivateRoute>
              }
            />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};
