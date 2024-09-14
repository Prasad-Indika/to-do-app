import { useState } from 'react'
import './App.css'
import SignIn from '../pages/Sign-in'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignIn/>
    </>
  )
}

export default App
