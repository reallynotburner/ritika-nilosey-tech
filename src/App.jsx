import './App.css'
import ApodSuspenseWrapper from "./Apod"
import Tracker from './Tracker';

function App() {
  return (
    <div className="App">
      <h1>Powered by Rikita</h1>
      <ApodSuspenseWrapper />
      <Tracker />
    </div>
  )
}

export default App
