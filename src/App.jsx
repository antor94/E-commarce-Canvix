import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import './App.css'
import Portfoliio from './components/Portfoliio'
import Contact from './pages/Contact'

const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/' element={<LayoutOne />}>
      <Route path='/portfolio' element={<Portfoliio />} />
      <Route path='/contact' element={<Contact />} />
      </Route>
    </Route>
  ))
  return (
    <>
    
    <RouterProvider router={myRoute} />
    
    
    </>
  )
}

export default App