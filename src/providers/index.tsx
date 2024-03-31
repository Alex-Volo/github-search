import React from 'react'
import type { FC, PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren> = ({ children }) => <React.StrictMode>{children}</React.StrictMode>
