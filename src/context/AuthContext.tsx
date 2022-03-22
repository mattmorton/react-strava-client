import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface IAuthContext {
  token: string;
  isLoading: boolean;
  isError: boolean;
  login: () => void;
}

const AuthContext = createContext<any>({} as IAuthContext)

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string>();
  const [isError, setIsError] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = () => {
    window.location.href = `https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=http://localhost:3000`
  }

  const memoedValue = useMemo(() => ({
    token,
    isLoading,
    isError,
    login
  }), [token, isLoading, isError])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }