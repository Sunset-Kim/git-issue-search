import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/feature/router';
import { SearchServiceProvider } from './feature/search/search.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchServiceProvider>
      <RouterProvider router={router} />
    </SearchServiceProvider>
  </React.StrictMode>
);
