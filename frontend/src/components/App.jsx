import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
     <Body />
      <h1>Vite + React + Docker template</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Footer /> 
      </div>
    </>
  )
}

export default App
