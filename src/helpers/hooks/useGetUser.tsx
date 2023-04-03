// import { useEffect, useRef } from 'react';
// import { useAppDispatch, useAppSelector } from './hook';
// import { AuthOperations } from '../../redux/auth';

// export const useGetUser = () => {
//   const isFirstRender = useRef(true);
//   const dispatch = useAppDispatch();
//   //   const getToken = state => state.auth.token;
//   const token = useAppSelector(state => state.auth.token);

//   useEffect(() => {
//     if (isFirstRender.current && token) {
//       dispatch(AuthOperations.fetchCurrentUser(token));
//     }
//     isFirstRender.current = false;
//   }, [token, dispatch]);
// };

export const useGetUser = () => {};
