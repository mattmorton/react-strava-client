import React, { useState } from 'react'
import useData from '../hooks/useData';
import { SummaryActivity } from '../models';
import ActivityCard from './ActivityCard';

const ActivityList = (props: { onSelectActivity: (activity: SummaryActivity) => void }) => {
  const { data, isLoading, isError } = useData({ path: `athlete/activities`, queryParams: 'per_page=3' });

  const listItems = (data as SummaryActivity[])?.map((activity) => <ActivityCard key={activity.id} activity={activity} onSelectActivity={props.onSelectActivity}></ActivityCard>);
  return (
    <>

      <ul>
        {listItems}
      </ul>


    </>
  )
}

export default ActivityList