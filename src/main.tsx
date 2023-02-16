import { router } from '@/feature/router';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { getToastOptions } from './feature/common';
import { IssueServiceProvider } from './feature/issues';
import { RepositoryContextProvider } from './feature/repository';
import { SearchServiceProvider } from './feature/search/search.context';

const { ToastContainer, toast } = createStandaloneToast();

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => {
      toast(
        getToastOptions('요청에러! 관리자에게 문의하세요', { status: 'error' })
      );
    },
  }),
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
        <IssueServiceProvider>
          <RepositoryContextProvider>
            <ChakraProvider>
              <RouterProvider router={router} />
              <ToastContainer />
            </ChakraProvider>
          </RepositoryContextProvider>
        </IssueServiceProvider>
      </SearchServiceProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
