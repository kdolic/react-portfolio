/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Fade from 'react-reveal/Fade'
import devfit from '../images/devfit.png'
import hrf from '../images/hrf.PNG'
import gilded from './../images/refactor.png'
import linkedin from './../images/linkedin-clone.PNG'

const Projects = (props) => {
    return (
       // <!-- Projects Section -->
          <section id="projects">
            <Fade top duration={1500}>
            <div class="projects container">
              <div class="projects-header">
                <h1 class="section-title text-5xl md:text-7xl xl:text-8xl">My <span>Projects</span></h1>
              </div>
              <div class="all-projects">
                <div class="project-item">
                  <div class="project-info">
                    <h1>{props.data ? props.data.title : 'loading...'}</h1>
                    <p>{props.data ? props.data.desc : 'loading...'}</p>
                    <h4>{props.data ? props.data.stack : 'loading...'}</h4>
                    <a href={props.data ? props.data.demo : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href={props.data ? props.data.code : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={devfit} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>{props.data ? props.data2.title : 'loading...'}</h1>
                    <p>{props.data ? props.data2.desc : 'loading...'}
                    </p>
                    <h4>{props.data ? props.data2.stack : 'loading...'}</h4>
                    <a href={props.data ? props.data.demo : 'loading...'}target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href={props.data ? props.data2.code : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={hrf} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>{props.data ? props.data3.title : 'loading...'}</h1>
                    <p>{props.data ? props.data3.desc : 'loading...'}</p>
                    <h4>{props.data ? props.data3.stack : 'loading...'}</h4>
                    <a href={props.data ? props.data3.demo : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href={props.data ? props.data3.code : 'loading...'}  target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={linkedin} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>{props.data ? props.data4.title : 'loading...'}</h1>
                    <p>{props.data ? props.data4.desc : 'loading...'}</p>
                    <h4>{props.data ? props.data4.stack : 'loading...'}</h4>
                    <a href={props.data ? props.data4.demo : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Demo</a>
                    <a href={props.data ? props.data4.code : 'loading...'} target="_blank" rel="noreferrer" className='border-2 border-red-700 w-3/5 rounded-xl text-xl text-center uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 mt-8 md:text-2xl md:py-2 md:px-8 md:w-full xl:text-3xl'>Code</a>
                  </div>
                  <div class="project-img">
                    <img src={gilded} alt="img"></img>
                  </div>
                </div>
              </div>
            </div>
            </Fade>
          </section>
    )
}

export default Projects
