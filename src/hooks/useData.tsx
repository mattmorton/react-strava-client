import { useEffect, useState } from "react";
import { api } from "../api/api";

const useData = (props: { accessToken: string, isAuthenticated: boolean, path: string, queryParams?: any }) => {
  const { accessToken, isAuthenticated, path, queryParams } = props;
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
    if (!isAuthenticated) {
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
  }, [accessToken, isAuthenticated, path, queryParams]);

  return { data, isLoading, isError };
};

export default useData;

