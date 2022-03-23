import { createContext, useEffect, useMemo, useState } from "react";
import useQuery from "../hooks/useQuery";

export interface IAuthContext {
  accessToken: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  init: () => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<any>({} as IAuthContext)

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isError, setIsError] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const query = useQuery();

  const init = () => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setAccessToken(accessToken)
      setIsAuthenticated(true)
    }
  }

  const login = () => {
    window.location.href = `https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=http://localhost:3000`
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    setAccessToken('')
    setIsAuthenticated(false)
  }

  useEffect(() => {
    if (query) {
      const accessToken = query.get('access_token')
      if (accessToken !== null) {
        localStorage.setItem('access_token', accessToken)
        setIsAuthenticated(true)
        setAccessToken(accessToken)
      }
    }
  }, [query])

  const memoedValue = useMemo(() => ({
    accessToken,
    isAuthenticated,
    isLoading,
    isError,
    init,
    login,
    logout
  }), [accessToken, isAuthenticated, isLoading, isError])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }