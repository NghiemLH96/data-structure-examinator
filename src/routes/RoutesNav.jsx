import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Global from '../pages/global/Global'
import Home from '../pages/home/Home'

export default function RoutesNav() {
  return (
    <Routes>
        <Route path='' element={<Global/>}>
            <Route path='home' element={<Home/>}></Route>
        </Route>
    </Routes>
  )
}
