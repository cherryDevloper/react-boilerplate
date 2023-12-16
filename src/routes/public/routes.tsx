import React, { lazy } from 'react';

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
};

const SignUp = lazy(() => import('../../pages/Signup'));

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    element: <SignUp />,
  },
];
