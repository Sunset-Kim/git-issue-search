import { router } from '@/feature/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RepositoryContextProvider } from './feature/repository';
import { SearchServiceProvider } from './feature/search/search.context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchServiceProvider>
        <RepositoryContextProvider>
          <RouterProvider router={router} />
        </RepositoryContextProvider>
      </SearchServiceProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
