"use client";

import { AuthProvider } from "@/context/authContext";
import { CardProvider } from "@/context/productCardContext";
import { SessionProvider } from "next-auth/react";

export default function WrapProviders({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <CardProvider>{children}</CardProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
