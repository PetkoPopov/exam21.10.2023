import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from "./components/Home"
import Users from "./components/Users"
import Login from './components/Login'
import { Logout } from './components/Logout'
import { Register } from './components/register/Register'
import { PlayGame } from './components/game/PlayGame'
import { Table } from './components/table/Table'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/play-game' element={<PlayGame />} />
          <Route path='/table/:number' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
