import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


//Way#1 of using Context API (not recommended as it is confusing)


function App() {


  return (
    <UserContextProvider>
      
    <h1>Learning Context API</h1>
    <Login />
    <Profile />

    </UserContextProvider>
  )
}

export default App
