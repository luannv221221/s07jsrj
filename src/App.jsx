import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Index from './pages/category/Index'
import Add from './pages/category/Add'
import Edit from './pages/category/Edit'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/category' Component={Category}>
          <Route index Component={Index}></Route>
          <Route path='add' Component={Add}></Route>
          <Route path='edit/:id' Component={Edit}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
