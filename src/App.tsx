
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
    <div>
      <h1 style={{marginBottom: '20px'}}>Hello Word</h1>

      <h2>{isRunning}</h2>

    </div>
    
  )
}