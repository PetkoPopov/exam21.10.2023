import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/users/NavBar'
import {  RegisterForm } from './components/users/RegisterForm'
import { LoginForm } from './components/users/LoginForm'
import { useState,useEffect } from 'react'
import Joke from './components/Joke'
import GetData from './components/GetData'
import GetAllUsers from './components/users/GetAllUsers'



function App() {
const [data,setData]=useState('')
const [count,setCount]=useState(0)
useEffect(()=>{
console.log(`use effect in App.jsx count is ==> ${count}`);
},[data])

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/"         element={<NavBar/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login'    element={<LoginForm/>}/>
          <Route path='/joke'     element={<Joke />}/>
          <Route path='/getData'  element={<GetData/>}/>
          <Route path='/allUsers' element={<GetAllUsers/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
