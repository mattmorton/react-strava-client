import React from 'react'
import useData from '../hooks/useData';
import { Activity } from '../models';
import ActivityCard from './ActivityCard';

const ActivityList = (props: { accessToken: string, isAuthenticated: boolean }) => {
  const { accessToken, isAuthenticated } = props;

  const { data, isLoading, isError } = useData({ accessToken, isAuthenticated, path: `athlete/activities`, queryParams: 'per_page=3' });

  const listItems = (data as Activity[])?.map((activity) => <ActivityCard key={activity.id} activity={activity}></ActivityCard>);
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