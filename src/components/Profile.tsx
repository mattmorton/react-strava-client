import React from 'react'
import { Athlete } from '../models'

const Profile = (props: { data: Athlete, isLoading: boolean, isError: boolean }) => {
  let { data } = props;
  return (
    <>
    {props.data && (
      <div className="p-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex space-x-4">
          <div>
            <img className="rounded-full" src={data.profile} alt="" ></img>
          </div>
          <div className="flex-1 space-y-6 py-1">
            <h3 className="font-bold text-gray-900 dark:text-white">{data.firstname} {data.lastname}</h3>
            <p className="text-xs">{data.city}, {data.country}</p>
  
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs">Followers</p>
                </div>
                <div>
                  <p className="text-xs">Following</p>
                </div>
                <div>
                  <p className="text-xs">Activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

)}
</>

    
  )
}

export default Profile