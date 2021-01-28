/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from './../images/netflix.PNG'

export default function Projects() {
    return (
        // <!-- Projects Section -->
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">My <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>YelpCamp</h1>
            <h2>Description</h2>
            <p>JavaScript | Node.js | Express.js | MongoDB</p>
            <a href="#" class="button">Demo</a>
            <a href="#" class="button">Code</a>
          </div>
          <div class="project-img">
            <img src="https://i.ibb.co/rvC69zM/yelp.png" alt="img"></img>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Netflix Clone</h1>
            <p>A Netflix clone built using React, Firebase. It fetches the data from TMDB (The Movie Database) API. It also displays the movie trailers which is fetched from YouTube.
            </p>
            <p>REACT</p>
            <a href="https://netflix-clone-c7ddd.web.app/" class="button">Demo</a>
            <a href="https://github.com/kdolic/netflix-clone" class="button">Code</a>
          </div>
          <div class="project-img">
            <img src={Image} alt="img"></img>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Amazon Clone</h1>
            <h2>Description</h2>
            <p>Languages Used</p>
            <a href="" class="button">Demo</a>
            <a href="" class="button">Code</a>
          </div>
          <div class="project-img">
            <img src="./images/code2.jpg" alt="img"></img>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>NBA Player Pick'Em App</h1>
            <h2>Description</h2>
            <p>Languages Used</p>
            <a href="" class="button">Demo</a>
            <a href="" class="button">Code</a>
          </div>
          <div class="project-img">
            <img src="./images/code2.jpg" alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
