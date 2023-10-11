import { useEffect, useState } from 'react';
import { AppRoutes } from './routes';
import { api } from './server/axios';

export function App() {
  const [isRunning, setIsRunning] = useState("")

  useEffect(() => {
    api.get('/')
      .then(response => {
        setIsRunning(response.data.message)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  return (
    <div>
      <AppRoutes />
      <h2>Server: {isRunning}</h2>
    </div>
  )
}