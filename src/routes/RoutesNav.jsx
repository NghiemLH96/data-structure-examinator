import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Global from '../pages/global/Global'
import Home from '../pages/home/Home'
import Course from '../pages/course/Course'

export default function RoutesNav() {
  return (
    <Routes>
        <Route path='' element={<Global/>}>
            <Route path='home' element={<Home/>}></Route>
            <Route path='course' element={<Course/>}></Route>
        </Route>
    </Routes>
  )
}
