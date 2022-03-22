import React from 'react'
import { formattedDistance } from '../utils/distance';

const SummaryCard = (props: { data: { count: number, distance: number, elevation_gain: number, moving_time: number }, title: string }) => {
  
  let { count, distance, elevation_gain, moving_time } = props.data;
  return (
    <>
      <div className="border-2 border-gray-400 hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-6 md:my-6">
        <h1>{props.title}</h1>
        <div className="w-full grid grid-cols-2 gap-4">
          <div>
            <h3>Count</h3>
            <p>{count}</p>
          </div>
          <div>
            <h3>Distance</h3>
            <p>{formattedDistance(distance, true)}</p>
          </div>
          <div>
            <h3>Elevation</h3>
            <p>{elevation_gain}</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>{moving_time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryCard