import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityList from './components/ActivityList';
import AuthButton from './components/AuthButton';
import SummaryList from './components/SummaryList';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';
import { useAuth } from './hooks/useAuth';



const App = () => {
  const { accessToken, isAuthenticated, init, login, logout } = useAuth();
  const id = '2751891'

  const handleActivityTypeChanged = (args: any) => {
    console.log(args)
  }
  
  useEffect(() => {
    init()
  }, [])

  return (
    
    <>
    <div className="flex h-screen bg-gray-100 font-sans">
      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start">
        <nav className="flex justify-end w-full h-20 px-2 py-2 bg-red-200 ">
          <AuthButton isAuthenticated={isAuthenticated} onLogout={logout} onLogin={login}></AuthButton>
        </nav>
        <aside className="flex flex-wrap content-start w-full md:max-w-sm md:h-full bg-gray-200 ">
          <SummaryList accessToken={accessToken} isAuthenticated={isAuthenticated} onActivityTypeChange={handleActivityTypeChanged}></SummaryList>
        </aside>
        {/* <!--Graph Content --> */}
        <main id="main-content" className="w-full flex-1">

            <div className="flex flex-1 flex-wrap">

                <div className="w-full xl:w-2/3 p-6 xl:max-w-6xl">

                    {/* <!--"Container" for the graphs"--> */}
                    <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">
                      <ActivityList accessToken={accessToken} isAuthenticated={isAuthenticated}></ActivityList>

                        {/* <div className="border-b p-3">
                            <h5 className="font-bold text-black">Graph</h5>
                        </div>
                        <div className="p-5">
                            <div className="ct-chart ct-golden-section" id="chart1"></div>
                        </div>
                        <div className="p-3">
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Table</h5>
                            </div>
                            <div className="p-5">
                                <table className="w-full p-5 text-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="text-left text-blue-900">Name</th>
                                            <th className="text-left text-blue-900">Side</th>
                                            <th className="text-left text-blue-900">Role</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Obi Wan Kenobi</td>
                                            <td>Light</td>
                                            <td>Jedi</td>
                                        </tr>
                                        <tr>
                                            <td>Greedo</td>
                                            <td>South</td>
                                            <td>Scumbag</td>
                                        </tr>
                                        <tr>
                                            <td>Darth Vader</td>
                                            <td>Dark</td>
                                            <td>Sith</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p className="py-2"><a href="#">See More issues...</a></p>

                            </div>
                        </div> */}

                    </div>

                </div>

                <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300">

                    {/* <!--"Container" for the graphs"--> */}
                    <div className="max-w-sm lg:max-w-3xl xl:max-w-5xl">

                        {/* <!--Graph Card--> */}

                        <div className="border-b p-3">
                            <h5 className="font-bold text-black">Graph</h5>
                        </div>
                        <div className="p-5">
                            <div className="ct-chart ct-golden-section" id="chart2"></div>
                        </div>

                        {/* /Graph Card */}

                        {/* Graph Card */}
                        <div className="border-b p-3">
                            <h5 className="font-bold text-black">Graph</h5>
                        </div>
                        <div className="p-5">
                            <div className="ct-chart ct-golden-section" id="chart3"></div>
                        </div>

                        {/* /Graph Card */}

                        {/* Graph Card */}

                        <div className="border-b p-3">
                            <h5 className="font-bold text-black">Graph</h5>
                        </div>
                        <div className="p-5">
                            <div className="ct-chart ct-golden-section" id="chart4"></div>
                        </div>

                        {/* /Graph Card */}

                        {/* Template Card */}
                        <div className="p-3">
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Template</h5>
                            </div>
                            <div className="p-5">

                            </div>
                        </div>
                        {/* /Template Card */}
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
    </>
  );
}

const AppWithContext = () => {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <AuthProvider>
            <App></App>
        </AuthProvider>
      </SettingsProvider>
    </BrowserRouter>
  )
}

export default AppWithContext;
