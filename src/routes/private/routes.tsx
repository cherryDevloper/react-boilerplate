import React, { lazy } from 'react';

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
};

const Home = lazy(() => import('../../pages/Home'));

export const privateRoutes: RouteConfig[] = [
  {
    path: '/home',
    element: <Home />,
  },
];
