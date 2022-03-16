export const secondsToTimeString = (input: number) => {
  const hours = Math.floor(input / 3600);
  const hoursRemainer = input % 3600;
  const minutes = Math.floor(hoursRemainer / 60);
  const seconds = hoursRemainer % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`
}