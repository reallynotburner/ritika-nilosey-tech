import { useState } from 'react'
import './App.css'
import ApodSuspenseWrapper from "./Apod"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1>Powered by Rikita...</h1>
      <ApodSuspenseWrapper />
    </div>
  )
}

export default App
