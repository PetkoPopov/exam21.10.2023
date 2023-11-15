import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { Home } from './components/Home'
function App() {

  return (
    <>
          <BrowserRouter>
          <Routes>
             <Route  path="/home" element={<Home />}/>
             

          </Routes>

          </BrowserRouter>

    </>
  )
}

export default App
