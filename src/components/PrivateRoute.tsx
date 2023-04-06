import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../helpers/hooks/hook';
import { RouteProps } from '../types/type';

// export default function PrivateRoute({ children }: Props, redirectTo = '/') {
//   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
//   return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
// }

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  redirectTo = '/',
  path = '',
}) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
