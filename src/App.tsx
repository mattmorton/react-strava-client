import React, { useEffect, useState } from 'react';
import './App.css';
import AuthButton from './components/AuthButton';
import Home from './components/Home';
import useQuery from './hooks/useQuery';

const App = (props: any) => {
  let [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  let [accessToken, setAccessToken] = useState<string>('')

  let query = useQuery();

  const handleLogin = () => {
    window.location.href = 'https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com/connect/strava/redirect?callback=http://localhost:3000'
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessToken('')
    localStorage.removeItem('access_token')
  }
  
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuthenticated(true)
      setAccessToken(accessToken)
    }
  }, [])

  useEffect(() => {
    if (query) {
      const accessToken = query.get('access_token')
      if (accessToken !== null) {
        setIsAuthenticated(true)
        setAccessToken(accessToken)
        localStorage.setItem('access_token', accessToken)
      }
    }
  }, [query])

  return (
    <>
    <nav className="flex justify-end bg-slate-50 p-2">
      <AuthButton isAuthenticated={isAuthenticated} onLogout={handleLogout} onLogin={handleLogin}></AuthButton>
    </nav>
    <main>
      <Home accessToken={accessToken} isAuthenticated={isAuthenticated}></Home>
    </main>
    </>
  );
}

export default App;
