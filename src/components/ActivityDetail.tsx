import React from 'react'
import useData from '../hooks/useData';
import { DetailedActivity } from '../models';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';

const ActivityDetail = (props: { activityId: number }) => {

  const { data, isLoading, isError }: { data: DetailedActivity, isLoading: boolean, isError: boolean} = useData({ path: `activities/${props.activityId}` });
  

  return (
    <>
      {!!props.activityId && data && (
        <div>
          <BarChart  width={600} height={400} data={data.laps}  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false}></YAxis>
            <Bar dataKey="average_speed" fill="#8884d8"></Bar>
            <Bar dataKey="max_speed" fill="#82ca9d"></Bar>
            <Legend />
          </BarChart >
        </div>
      )}
    </>
  )
}

export default ActivityDetail