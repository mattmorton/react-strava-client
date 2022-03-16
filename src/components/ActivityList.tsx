import React from 'react'
import { Activity } from '../models';
import ActivityCard from './ActivityCard';

const ActivityList = (props: any) => {

  let { data, isLoading, isError }: { data: Activity[], isLoading: boolean, isError: boolean } = props;

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