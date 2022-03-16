import React from 'react'
import { Activity } from '../models';
import ActivityCard from './ActivityCard';

const ActivityList = (props: { data: Activity[], isLoading: boolean, isError: boolean }) => {

  let { data, isLoading } = props;

  const listItems = data?.map((activity) => <ActivityCard key={activity.id} activity={activity}></ActivityCard>);
  return (
    <>
    {!isLoading && (
      <ul>
        {listItems}
      </ul>

    )}
    </>
  )
}

export default ActivityList