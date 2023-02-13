import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='nav-menu' style={{width:"98%", justifyContent:"flex-end", display:"flex", margin:"auto", marginTop:"2px", gap:"20px", backgroundColor:"gray", padding:"8px 5px", borderRadius:"10px" }}>
    <Link to="/"> <button style={{border:"none", padding:"1% 2%", width:"100px", height:"40px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link home'>Home</button></Link>
    <Link to="/about"> <button style={{border:"none", padding:"1% 2%",width:"100px", height:"40px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link about' >About</button></Link>
   <Link to="/skills"> <button style={{border:"none", padding:"1% 2%", height:"40px", width:"100px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link skills'>Skills</button></Link>
    <Link to="/project"><button style={{border:"none", padding:"1% 2%" , height:"40px", width:"100px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link projects'>Projects</button></Link>
    <Link to="/contact"><button style={{border:"none", padding:"1% 2%", height:"40px", width:"100px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link contact'>Contact</button></Link>
    <Link to="/resume"><button style={{border:"none", padding:"1% 2%", height:"40px", width:"100px", borderRadius:"10px", backgroundColor:"orange", color:"white", cursor:"pointer"}} className='nav-link resume'>Resume</button></Link>
      
    </div>
  )
}

export default Navbar

// Navbar : id="nav-menu"
// Home section : id="home"
// About section : id="about" class="about section"
// Skills section : id="skills"
// Projects section : id="projects"
// Contact section : id="contact"