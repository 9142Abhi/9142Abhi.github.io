import React from 'react';
import './Project.css';



const Project = () => {

  return (
    <section className="project" id="projects">
        <div className="max-width">
            <h2 className="titles">Projects</h2>
            <div id='cards' >

<div className="card project-card">
             <div className="box">
              {/* <img src={Reliance} alt=""/> */}
               <div className="text project-title">Big Basket</div>
            <p className='project-description' >igBasket is a large online grocer headquartered in Bangalore, India, and currently owned by Tata Group. Its registered company name is Supermarket Grocery Supplies Pvt.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : JavaScrpit, HTML, CSS, React</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/udaykashyap/makeshift-top-3565" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://makeshift-top-3565.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>

       <div className="card project-card">
             <div className="box">
              {/* <img src={Gusto} alt=""/> */}
               <div className="text project-title">Outlook India</div>
            <p className='project-description'>Outlook is a weekly general interest English and Hindi news magazine published in India. It is owned by the Rajan Raheja Group. 

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : HTML, CSS</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/9142Abhi/-knotty-sock-1389" target="_blank"> Git Repo </a></span>
             </div>
 
                 <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://phenomenal-custard-74b904.netlify.app/" target="_blank">Live </a></span>
                 </div>

           </div>
                        </div>   
       </div>

       <div className="card project-card">
             <div className="box">
              {/* <img src={MyGlamm} alt=""/> */}
               <div className="text project-title">Intern Theory</div>
            <p className='project-description'>Intern Theory is an online internship portal created to bridge the gap between students seeking internships and companies looking for interns.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : JavaScrpit, HTML, CSS</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/saurav269/InternTheory-Website-Clone-" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://sprightly-daifuku-a3b23a.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>

       {/* <div className="card project-card">
             <div className="box">
              <img src={Reliance} alt=""/>
               <div className="text project-title">Reliance Digital</div>
            <p className='project-description'>This is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack: JavaScrpit, HTML, CSS, React</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/kartikmickey/mindless-wool-6764" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://chipper-parfait-a47527.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>            */}

            </div>
        </div>
    </section>
  )
}

export default Project