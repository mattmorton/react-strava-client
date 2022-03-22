import React, { useState } from 'react'
import useData from '../hooks/useData';
import { ActivityType, AthleteStats } from '../models';
import SummaryCard from './SummaryCard'

const SummaryList = (props: { accessToken: string, isAuthenticated: boolean, onActivityTypeChange: (activityType: ActivityType) => void; }) => {
  const { accessToken, isAuthenticated } = props;
  const id = '2751891'
  const { data, isLoading, isError } = useData({ accessToken, isAuthenticated, path: `athletes/${id}/stats` });

  
  const [activityType, setActivityType] = useState(ActivityType.RUN)
  
  const toggleActivityType = (activityType: ActivityType) => {
    setActivityType(activityType)
    props.onActivityTypeChange(activityType)
  }
  
  return (
    <>
    {!isLoading && (
      <>
      <div className="flex w-full m-2 md:mx-6 md:my-6">
          <button onClick={() => toggleActivityType(ActivityType.RUN)} className="btn-primary flex-auto">
            Run
          </button>
          <button onClick={() => toggleActivityType(ActivityType.RIDE)} className="btn-primary flex-auto">
            Ride
          </button>
          <button onClick={() => toggleActivityType(ActivityType.SWIM)} className="btn-primary flex-auto">
            Swim
          </button>
        </div>
        <div className='flex flex-col'>
          <SummaryCard title="All Time" data={data[`all_${activityType}_totals`]}></SummaryCard>
          <SummaryCard title="Year To Date" data={data[`ytd_${activityType}_totals`]}></SummaryCard>    
          <SummaryCard title="Recent" data={data[`recent_${activityType}_totals`]}></SummaryCard>    
        </div>
        </>
    )}
    </>
  )
}

export default SummaryList

