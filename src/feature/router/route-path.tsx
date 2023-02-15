import { ErrorPage, HomePage, IssuesPage } from '@/page';
import { RootPage } from '@/page/root.page';
import type { RouteObject } from 'react-router-dom';

export const routePath: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/issues',
        element: <IssuesPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];
