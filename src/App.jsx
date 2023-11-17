import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/users/NavBar'
import {  RegisterForm } from './components/users/RegisterForm'
import { LoginForm } from './components/users/LoginForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path='/register' element={<RegisterForm />}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
