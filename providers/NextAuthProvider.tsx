"use client"

import { SessionProvider } from "next-auth/react"

export type ChildrenType ={
    children: React.ReactNode
}

export const NextAuthProvider = ({children}:ChildrenType) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}