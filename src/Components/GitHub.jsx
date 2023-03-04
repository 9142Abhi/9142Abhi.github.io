import React from 'react';
import './GitHub.css';
import Githubcalendar from "react-github-calendar";
import ReactTooltip from 'react-tooltip'

export const Github = () => {
    
  return (
    <section className="abouta about section" id="github">

    <div className="max-width">
    <h2 className="title">GitHub</h2>
   <div style={{margin: "auto", textAlign: "center"}} >
  
   <Githubcalendar
   className="react-activity-calendar" 
          username="9142Abhi"
          blockSize={18}
          blockMargin={5}
          fontSize={16}
          blockRadius={2}   
        hideColorLegend
        >
            <ReactTooltip html/>
        </Githubcalendar>
        <div id="sec">
        <img  id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com/?user=9142Abhi' alt='git-streak' />
       
        <img  id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=9142Abhi' alt='git-stats' />
        
        </div>
        <img style={{margin: "auto"}} id="github-top-langs"  src='https://github-readme-stats.vercel.app/api/top-langs/?username=9142Abhi' alt='git-top-langs' />
   </div>
    </div>
    </section>
  )
}
