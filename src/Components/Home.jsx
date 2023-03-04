import './Home.css';
import Resume from '../images/Resume.pdf'
import { saveAs } from "file-saver"

const Home = ()=>{
    const handleClick = ()=>{
    
        saveAs(Resume, "Abhishek_Kumar_Resume");
       }
return  <div id='home' >

    <div className="text-1">Hello, I'm a </div>
    <div className="text-2">Web
   Developer</div>
   <a id="resume-link-2" onClick={handleClick} className="text-3"href="https://drive.google.com/file/d/1J0OEHJCN7Ppaglh4UnclZuyaYBwkG6x6/view" target="_blank" download >Resume</a>
  
    
</div>
}

export default Home