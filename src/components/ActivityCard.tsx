import React from 'react'
import { Activity } from '../models';
import { format, formatRelative } from 'date-fns';
import { secondsToTimeString } from '../utils/time';
import WrappedGoogleMap from './GoogleMap';

const ActivityCard = (props: { activity: Activity }) => {
  let { activity } = props;
  return (
    <>
    <div className="p-4 mb-4 max-w-xl bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-bold text-gray-900 dark:text-white">{activity.name}</h3>
        <p className="text-xs">{formatRelative(new Date(activity.start_date), new Date())}</p>
        <div className="grid grid-cols-4 gap-4 my-4">
          <div>
            <p className="text-sm mb-2 text-gray-900 dark:text-white">Distance</p>
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{(activity.distance / 1000).toFixed(2)} / km</h3>
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-900 dark:text-white">Pace</p>
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{((activity.elapsed_time / 60) / (activity.distance / 1000)).toFixed(2)} / km</h3>
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-900 dark:text-white">Elevation</p>
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{activity.total_elevation_gain} m</h3>
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-900 dark:text-white">Time</p>
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{secondsToTimeString(activity.elapsed_time)}</h3>
          </div>
        </div>
        <div>
          <WrappedGoogleMap center={{ lat: activity.start_latitude, lng: activity.start_longitude}} zoom={15}></WrappedGoogleMap>
        </div>
    </div>
    </>
  )
}

export default ActivityCard