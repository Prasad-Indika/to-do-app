import { useState } from 'react'
import './App.css'
import SignIn from '../pages/Sign-in'
import SignUp from '../pages/Sign-up/Sign-up'
import { Route, Routes,Navigate } from 'react-router-dom';
import TodoList from '../pages/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
	      <Route path={"*"} element={<Navigate to={'/sign-in'}/>}/>
        <Route path={"/sign-in"} element={<SignIn/>}/>
        <Route path={"/sign-up"} element={<SignUp/>}/>
        <Route path={"/todolist"} element={<TodoList/>}/>
      </Routes>

    </>
  )
}

export default App
