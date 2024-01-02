// used to wrap the whole project/authenticate project to enable logging in and out.
"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
