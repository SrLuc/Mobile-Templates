export function showTime() {

  const now = new Date();

  const hours = now.getHours();

  const minutes = now.getMinutes();
  
  return `${hours}:${minutes}`;
}
