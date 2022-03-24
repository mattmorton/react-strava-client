export const formattedDistance = (distance: number, units: boolean = true): string => {
  if (distance < 1000) {
    return `${distance} ${units ? 'm' : ''}`
  }
  return `${(distance / 1000).toFixed(2)} ${units ? 'km' : ''}`
}

export const formattedPace = (metersPerSecond: number, units: boolean = true): string => {
  const pace = 1000 / metersPerSecond / 60;
  const minutes = Math.floor(pace);
  const seconds = Math.round(pace % 1 * 60)
  return `${minutes}:${seconds} ${units ? '/ km' : ''}`
}