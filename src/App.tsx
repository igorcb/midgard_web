
import { useEffect, useState } from 'react';
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
    <main className="h-screen bg-zinc-900">
      <p>Hello Word</p>
    </main>
  )
}