/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import netflix from './../images/netflix.PNG'
import linkedin from './../images/linkedin-clone.PNG'
import code2 from '../images/code2.jpg'

const ProjectsWrapper = styled.div`

/* Projects Section */
#projects .projects {
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 5%;
}

#projects .projects-header h1 {
  margin-bottom: 5%;
}

#projects .all-projects {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#projects .project-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 5% auto;
  overflow: hidden;
  border-radius: 2.5%;
}

#projects .project-info {
  padding: 10%;
  flex-basis: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: white;
}

#projects .project-info h1 {
  font-size: 3rem;
  font-weight: 500;
}

#projects .project-info h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 10px;
}

#projects .project-info p {
  font-size: 1.6rem;
  color: white;
}

#projects .project-info a {
  font-size: 1.5rem;
  padding: 3%;
}

#projects .project-info .button {
  width: 60%;
  text-align: center;
  font-size: 1.3rem;
  padding: 2% 5%;
  border-radius: 10px;
}

#projects .project-img {
  flex-basis: 50%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

#projects .project-img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  opacity: 0.3;
}

#projects .project-img img {
  object-fit: cover;
  transition: 0.3s ease transform;
}

#projects .project-item:hover .project-img img {
  transform: scale(1.1);
  opacity: 0.9;
}

/* End of Projects section */

// TABLET
@media only screen and (min-width: 768px) {
  /* Projects Section */
  #projects .projects {
    padding-top: 8%;
    padding-bottom: 8%;
  }

  #projects .project-item {
    flex-direction: row;
  }
  #projects .project-item:nth-child(even) {
    flex-direction: row-reverse;
  }
  #projects .project-item {
    height: 350px;
    margin: 0;
    width: 80%;
    border-radius: 0;
  }
  #projects .all-projects .project-info {
    height: 100%;
  }
  #projects .all-projects .project-img {
    height: 100%;
  }

  #projects .project-info h1 {
    font-size: 4rem;
  }

  #projects .project-info h2 {
    font-size: 2rem;
    margin-top: 20px;
  }

  #projects .project-info p {
    font-size: 1.5rem;
  }

  #projects .project-info .button {
    width: 100%;
    font-size: 1.8rem;
    padding: 1% 8%;
    border-radius: 10px;
  }

  #projects .project-img {
    height: 350px;
  }
  /* End of Projects section */
}

// DESKTOP
@media only screen and (min-width: 1200px) {
   /* Projects Section */
   #projects .projects {
    padding-top: 6%;
    padding-bottom: 4%;
  }
  
  #projects .project-item {
    height: 380px;
  }
  /* End of Projects section */
}

`

export default function Projects() {
    return (
        // <!-- Projects Section -->
        <ProjectsWrapper>
          <section id="projects">
            <div class="projects container">
              <div class="projects-header">
                <h1 class="section-title">My <span>Projects</span></h1>
              </div>
              <div class="all-projects">
                <div class="project-item">
                  <div class="project-info">
                    <h1>LinkedIn Clone</h1>
                    <p>A LinkedIn clone that allows user to register/login </p>
                    <h4>JavaScript/JSX | React | Redux | CSS | Material-UI | Firebase (Authorization & Deployment)</h4>
                    <a href="https://linkedin-clone-ad6ac.web.app/" target="_blank" rel="noreferrer" class="button">Demo</a>
                    <a href="https://github.com/kdolic/linkedin-clone" target="_blank" rel="noreferrer" class="button">Code</a>
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
                    <a href="https://netflix-clone-c7ddd.web.app/" target="_blank" rel="noreferrer" class="button">Demo</a>
                    <a href="https://github.com/kdolic/netflix-clone" target="_blank" rel="noreferrer" class="button">Code</a>
                  </div>
                  <div class="project-img">
                    <img src={netflix} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>Amazon Clone</h1>
                    <h2>Description</h2>
                    <p>Languages Used</p>
                    <a href="" target="_blank" class="button">Demo</a>
                    <a href="" target="_blank" class="button">Code</a>
                  </div>
                  <div class="project-img">
                    <img src={code2} alt="img"></img>
                  </div>
                </div>
                <div class="project-item">
                  <div class="project-info">
                    <h1>NBA Player Pick'Em App</h1>
                    <h2>Description</h2>
                    <p>Languages Used</p>
                    <a href="" target="_blank" class="button">Demo</a>
                    <a href="" target="_blank" class="button">Code</a>
                  </div>
                  <div class="project-img">
                    <img src={code2} alt="img"></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ProjectsWrapper>
    )
}
