import React, { useEffect, useState } from 'react'
import { api } from '../api/api';

const withStravaData = (WrappedComponent: any) => {
  
  const WithStravaData = (props: any) => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(() => {
      const fetchData = async (url: string) => {
        setIsLoading(true)
        setIsError(false)
        try {
          const response = await api(url, { token: props.accessToken });
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
      if (!props.isAuthenticated) {
        return;
      }
      if (props.path) {
        url = `${url}/${props.path}`
      }
      if (props.queryParams) {
        const searchParams = new URLSearchParams(props.queryParams);
        url = `${url}?${searchParams}`
      }
      fetchData(url);
    }, [props.isAuthenticated, props.path, props.queryParams, props.accessToken]);


    return <WrappedComponent data={data} isLoading={isLoading} isError={isError}></WrappedComponent>  

  }
  return WithStravaData
}

export default withStravaData