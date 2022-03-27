import React from 'react'
import useData from '../hooks/useData';
import { Activity } from '../models';
import ActivityCard from './ActivityCard';

const ActivityList = () => {
  const { data, isLoading, isError } = useData({ path: `athlete/activities`, queryParams: 'per_page=3' });

  const listItems = (data as Activity[])?.map((activity) => <ActivityCard key={activity.id} activity={activity}></ActivityCard>);
  return (
    <>

      <ul>
        {listItems}
      </ul>


    </>
  )
}

export default ActivityList