"use client";

import { createContext, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  const login = (provider = "google") => signIn(provider);
  const logout = () => signOut();

  return (
    <AuthContext.Provider
      value={{
        user: session?.user || null,
        isAuthenticated: !!session,
        status, // "loading" | "authenticated" | "unauthenticated"
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Optional helper if you want direct import from context file
export const useAuthContext = () => useContext(AuthContext);
