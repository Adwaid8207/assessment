import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <br /><br />
     <Routes>
      <Route path='/' element={<Api/>}/>
      <Route path='/a' element={<AddProduct/>}/>

     </Routes>
    </>
  )
}

export default App
