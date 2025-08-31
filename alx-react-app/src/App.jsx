import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WelcomeMessage />
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
