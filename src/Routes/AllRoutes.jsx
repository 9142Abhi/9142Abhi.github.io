import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Page/About'
import Contact from '../Page/Contact'
import HomePage from '../Page/HomePage'
import Project from '../Page/Project'
import Skill from '../Page/Skill'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/skills' element={<Skill/>}/>
        <Route path="/resume" ></Route>

    </Routes>
  )
}

export default AllRoutes
