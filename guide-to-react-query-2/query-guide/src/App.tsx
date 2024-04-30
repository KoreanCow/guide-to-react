import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPage from './page/TestPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();
function App() {
  return (
    <>

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <TestPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
