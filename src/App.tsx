import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ActivityDetail from './components/ActivityDetail';
import ActivityList from './components/ActivityList';
import AuthButton from './components/AuthButton';
import SummaryList from './components/SummaryList';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { SummaryActivity, ActivityType } from './models';



const App = () => {
  const { athlete, isAuthenticated, init, login, logout } = useAuth();
  const [ selectedActivityType, setSelectedActivityType ] = useState<ActivityType>(ActivityType.RUN)
  const [ selectedActivity, setSelectedActivity ] = useState<SummaryActivity>()

  
  useEffect(() => {
    init()
  }, [])

  return (
    
    <>
    <div className="flex bg-gray-100 font-sans">
      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start">
        <nav className="sticky top-0 flex justify-end w-full h-20 px-2 py-2 bg-red-200 ">
          <AuthButton isAuthenticated={isAuthenticated} onLogout={logout} onLogin={login}></AuthButton>
        </nav>
        <aside className="flex flex-wrap content-start w-full md:max-w-sm bg-gray-200 ">
          <>
          {!!athlete && (
            <SummaryList onActivityTypeChange={setSelectedActivityType}></SummaryList>
          )}
          </>
        </aside>
        <main id="main-content" className="w-full flex-1">
          <div className="flex flex-1 flex-wrap">
            <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl">
              <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">
                <ActivityList onSelectActivity={setSelectedActivity}></ActivityList>
              </div>
            </div>
            <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300">

                <div className="max-w-sm lg:max-w-3xl xl:max-w-5xl">

                    {/* <!--Graph Card--> */}

                    <div className="border-b p-3">
                        <h5 className="font-bold text-black">Pace</h5>
                    </div>
                    <div className="p-5">
                        <div className="ct-chart ct-golden-section" id="chart2">
                        <>
                {!!selectedActivity && (
                  <ActivityDetail activityId={selectedActivity.id}></ActivityDetail>
                )}
                </>
                        </div>
                    </div>

                    {/* /Graph Card */}

                    {/* Graph Card */}
                    {/* <div className="border-b p-3">
                        <h5 className="font-bold text-black">Graph</h5>
                    </div>
                    <div className="p-5">
                        <div className="ct-chart ct-golden-section" id="chart3"></div>
                    </div> */}

                    {/* /Graph Card */}

                    {/* Graph Card */}

                    {/* <div className="border-b p-3">
                        <h5 className="font-bold text-black">Graph</h5>
                    </div>
                    <div className="p-5">
                        <div className="ct-chart ct-golden-section" id="chart4"></div>
                    </div> */}

                    {/* /Graph Card */}

                    {/* Template Card */}
                    {/* <div className="p-3">
                        <div className="border-b p-3">
                            <h5 className="font-bold text-black">Template</h5>
                        </div>
                        <div className="p-5">

                        </div>
                    </div> */}
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
        <AuthProvider>
            <App></App>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default AppWithContext;
