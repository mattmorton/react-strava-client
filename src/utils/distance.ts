export const formattedDistance = (distance: number, units?: boolean): string => {
  if (distance < 1000) {
    return `${distance} ${units ? 'm' : ''}`
  }
  return `${(distance / 1000).toFixed(2)} ${units ? 'km' : ''}`
}