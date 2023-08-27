import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";

interface AuthProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { AppProvider };
