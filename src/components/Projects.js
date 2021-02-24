/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import netflix from './../images/netflix.PNG'
import linkedin from './../images/linkedin-clone.PNG'
import code2 from '../images/code2.jpg'

const Projects = () => {
    return (
       // <!-- Projects Section -->
          <section id="projects">
            <div class="projects container">
              <div class="projects-header">
                <h1 class="section-title text-5xl md:text-7xl xl:text-8xl">My <span>Projects</span></h1>
              </div>
              <div class="all-projects">
                <div class="project-item">
                  <div class="project-info">
                    <h1>LinkedIn Clone</h1>
                    <p>A LinkedIn clone that allows user to register/login </p>
                    <h4>JavaScript/JSX | React | Redux | CSS | Material-UI | Firebase (Authorization & Deployment)</h4>
                    <a href="https://linkedin-clone-ad6ac.web.app/" target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href="https://github.com/kdolic/linkedin-clone" target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={linkedin} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>Netflix Clone</h1>
                    <p>A Netflix clone built using React, Firebase. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which is fetched from YouTube.
                    </p>
                    <h4>React</h4>
                    <a href="https://netflix-clone-c7ddd.web.app/" target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href="https://github.com/kdolic/netflix-clone" target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={netflix} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>Project # 3</h1>
                    <p>Description</p>
                    <h4>Languages Used</h4>
                    <a href="" target="_blank" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href="" target="_blank" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={code2} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>Project # 4</h1>
                    <p>Description</p>
                    <h4>Languages Used</h4>
                    <a href="" target="_blank" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href="" target="_blank" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={code2} alt="img"></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Projects
