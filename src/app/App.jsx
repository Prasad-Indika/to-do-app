import { useState } from 'react'
import './App.css'
import SignIn from '../pages/Sign-in'
import SignUp from '../pages/Sign-up/Sign-up'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignIn/> */}
      <SignUp/>

    </>
  )
}

export default App
