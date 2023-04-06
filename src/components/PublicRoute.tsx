import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../helpers/hooks/hook';

// type Props =
//   | {
//       children:
//     | ((props: RouteChildrenProps<any>) => React.ReactNode)
// //     | React.ReactNode;
//       restricted: boolean;
//       redirectTo: string;
//     }
//   | any;

type Props = {
  children: JSX.Element;
  restricted: boolean;
  redirectTo: string;
  path: string;
};

// export interface IRoute {
//   children?: React.ComponentType<{}>;
//   path?: string | string[];
//   restricted?: boolean;
//   redirectTo: string;
// }
// // interface PublicRouteProps extends RouteChildrenProps {}

// const PublicRoute extends React.FC<IRoute> = ({
//   children,
//   restricted = false,
//   redirectTo = '/',
// }) => {
//   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
//   const shouldNavigate = isLoggedIn && restricted;
//   return shouldNavigate ? <Navigate to={redirectTo} /> : children;
// };
// export default PublicRoute;

export const PublicRoute: React.FC<Props> = ({
  children,
  restricted = false,
  redirectTo = '/',
  path = '',
}) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to={redirectTo} /> : children;
};

// export const PublicRoute = ({ children }: { children: JSX.Element }) => {
//   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

//   return !isLoggedIn ? children : <Navigate to={'/login'} />;
// };
