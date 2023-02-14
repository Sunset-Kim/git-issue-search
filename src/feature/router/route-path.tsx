import { ErrorPage, HomePage, IssuesPage } from '@/page';
import type { RouteObject } from 'react-router-dom';

export const routePath: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/issues',
    element: <IssuesPage />,
  },
];
