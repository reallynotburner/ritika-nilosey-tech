import { useState } from 'react'
import './App.css'
import Apod from "./Apod"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1>Powered by Rikita...</h1>
      <button onClick={() => {alert('click')}}>GIMMIE</button>
      <Apod />
    </div>
  )
}

export default App
