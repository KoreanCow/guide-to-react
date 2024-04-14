import React from 'react';
import { useCookies } from 'react-cookie';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const [cookies] = useCookies(['refreshToken']);
  const refreshToken = cookies.refreshToken;

  if (!refreshToken) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
