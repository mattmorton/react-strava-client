import React from 'react'
import ActivityList from './ActivityList'
import Profile from './Profile'
import withStravaData from './withStravaData'

const ProfileWithStravaData = withStravaData(Profile)
const ActivitityListWithStravaData = withStravaData(ActivityList)

const Home = (props: { isAuthenticated: boolean, accessToken: string }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/4">
              <div className="sticky top-0 p-4 w-full">
              </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 p-4">
            <ActivitityListWithStravaData accessToken={props.accessToken} isAuthenticated={props.isAuthenticated} path={'athlete/activities'}></ActivitityListWithStravaData>
          </main>
        </div>
      </div>
      <footer className="mt-auto">
          ...
      </footer>
      </>
  )
}

export default Home