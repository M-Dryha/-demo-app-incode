// import React, { Suspense, lazy } from 'react';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Register from './Register';
// import { useGetUser } from '../helpers/hooks/useGetUser';
import { useAppSelector } from '../helpers/hooks/hook';
import Loader from './Loader';
import SignIn from './SignIn/SignIn';
import { theme } from '../helpers/MUI-theme';
// import { useAppDispatch, useAppSelector } from '../../helpers/hooks';

// type JSXNode = JSX.Element | null;

// type Props = {
//   isFetchingUser: boolean;
// };

// export const App: React.FC = () => {
//   useGetUser();
//   const isFetchingUser = useAppSelector(
//     state => state.auth.isRefreshingCurrentUser
//   );

//   return (
//     !isFetchingUser && (
//       <div>
//         <Routes>
//           <Route path="/" element={<Register />}></Route>
//         </Routes>
//       </div>
//     )
//   );
// };

export const App: React.FC = () => {
  // useGetUser();
  const isFetchingUser = useAppSelector(
    state => state.auth.isRefreshingCurrentUser
  );
  if (!isFetchingUser) {
    return (
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" sx={{}}>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route
                path="/login"
                element={<SignIn password={''} username={''} />}
              />
            </Routes>
          </Container>
        </ThemeProvider>
      </Suspense>
    );
  }
  return null;
};

// export const App: React.FC = () => {
//   return (
//     <div>
//       <Register />
//     </div>
//   );
// };
