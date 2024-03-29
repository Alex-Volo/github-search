import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { FC, PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <React.StrictMode>
    <BrowserRouter>{children}</BrowserRouter>
  </React.StrictMode>
)
