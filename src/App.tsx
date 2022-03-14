import React, { useEffect, useState } from 'react';
import './App.css';
import useQuery from './hooks/useQuery';

const App = (props: any) => {
  let [authenticated, setAuthenticated] = useState<boolean>(false)
  let [accessToken, setAccessToken] = useState<string>()
  let query = useQuery();

  const handleLogin = () => {
    window.location.href = 'https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=http://localhost:3000'
  }

  useEffect(() => {
    if (query) {
      const accessToken = query.get('access_token')
      if (accessToken !== null) {
        setAuthenticated(true)
        setAccessToken(accessToken)
        localStorage.setItem('access_token', accessToken)
      }
    }
  }, [query])

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setAuthenticated(true)
      setAccessToken(accessToken)
    }
  }, [])

  return (
    
    <div>
      <button onClick={handleLogin}>Login</button>
      {authenticated && (
        <div>Authenticated! {accessToken}</div>
      )}
    </div>
  );
}

export default App;
