import '../styles/Button.css'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'


function Button() {
    const [response,setResponse] = useState(null);
    
    
    const handleClick= ()  => {
        axios.get('https://owen-wilson-wow-api.onrender.com/wows/random')
        .then(res => {
          setResponse(JSON.stringify(res.data, null, 2));
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
      }
      



  return (
    <>
    
    <button onClick={handleClick}>Wow</button>
    <div>{response}</div>
    </>
  )
}

export default Button
