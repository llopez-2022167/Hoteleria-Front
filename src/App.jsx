import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'

export const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    {/*<Footer/>*/}
    </>
  )
}


export default App
