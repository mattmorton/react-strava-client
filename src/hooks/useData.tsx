import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useAuth } from "./useAuth";

const useData = (props: { path: string, queryParams?: any }) => {
  const { path, queryParams } = props;
  const { accessToken, isAuthenticated, athlete } = useAuth()

  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  const gen = <Type extends unknown>(arg: Type) => {

  }

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true)
      setIsError(false)
      try {
        const response = await api(url, { token: accessToken });
        if (response.ok) {
          setData(response.value)
          setIsLoading(false)
        } else {
          setIsError(true)
        }
      } catch (e) {
        setIsError(true)
        setIsLoading(false)
      }
    }
    
    let url = 'https://www.strava.com/api/v3'
    if (!isAuthenticated || !accessToken || !athlete) {
      return;
    }
    if (path) {
      url = `${url}/${path}`
    }
    if (queryParams) {
      const searchParams = new URLSearchParams(queryParams);
      url = `${url}?${searchParams}`
    }

    fetchData(url);
  }, [accessToken, athlete, isAuthenticated, path, queryParams]);

  return { data, isLoading, isError };
};

export default useData;

