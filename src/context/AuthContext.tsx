import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../api/api";
import useQuery from "../hooks/useQuery";
import { Athlete } from "../models";

export interface IAuthContext {
  accessToken: string;
  athlete: Athlete;
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
  const [athlete, setAthlete] = useState<Athlete>();
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
    window.location.href = `https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=${process.env.REACT_APP_HOST}`
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


  useEffect(() => {
    let url = 'https://www.strava.com/api/v3/athlete'

    const fetchAthlete = async (url: string, token: string) => {
      try {
        const response = await api(url, { token });
        if (response.ok) {
          setAthlete(response.value as Athlete)
        } 
      } catch (e) {
        console.log(e)
      }
    }

    if (accessToken && !athlete) {
      fetchAthlete(url, accessToken);
    }
  }, [accessToken, athlete])

  const memoedValue = useMemo(() => ({
    accessToken,
    athlete,
    isAuthenticated,
    isLoading,
    isError,
    init,
    login,
    logout
  }), [accessToken, athlete, isAuthenticated, isLoading, isError])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }