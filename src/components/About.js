import React from 'react'
import resume from './../images/KenanDolicOnePage.pdf'

export default function About() {
    return (
// <!-- About Section -->
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="https://i.ibb.co/L62btyj/Professional-Photo-1.jpg" alt="img"></img>
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Full-Stack Developer</h2>
        <p>My name is Kenan. Currently a full-stack web development student at <span>Lambda School</span>. </p>
        <a href={resume} download class="button">Download Resume</a>
      </div>
    </div>
  </section>
    );
}
