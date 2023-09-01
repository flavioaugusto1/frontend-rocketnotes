import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ name: "Flávio", email: "flávio.dev@gmail.com " }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const data = useContext(AuthContext);
  return data
}

export { AuthProvider, useAuth };
