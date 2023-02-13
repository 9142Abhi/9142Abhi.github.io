import React from 'react'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div id='projects'>
      <div className='project-card'>
        <img src="" alt="" />
        <p className='project-title'>title</p>
        <p className='project-description'>Description</p>
        <p className='project-tech-stack'>Tech Stack</p>
        <Link to=""><button className='project-github-link'>GitHub</button></Link>
        <Link to=""><button className='project-deployed-link'>Netlify</button></Link>

      </div>
      <div className='project-card'>
        <img src="" alt="" />
        <p className='project-title'>title</p>
        <p className='project-description'>Description</p>
        <p className='project-tech-stack'>Tech Stack</p>
        <Link to=""><button className='project-github-link'>GitHub</button></Link>
        <Link to=""><button className='project-deployed-link'>Netlify</button></Link>
        
      </div>
      <div className='project-card'>
        <img src="" alt="" />
        <p className='project-title'>title</p>
        <p className='project-description'>Description</p>
        <p className='project-tech-stack'>Tech Stack</p>
        <Link to=""><button className='project-github-link'>GitHub</button></Link>
        <Link to=""><button className='project-deployed-link'>Netlify</button></Link>
        
      </div>
    </div>
  )
}

export default Project
