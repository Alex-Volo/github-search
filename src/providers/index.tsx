import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={client}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
)
