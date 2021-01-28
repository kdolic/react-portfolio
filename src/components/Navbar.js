import React from 'react'
export default function Navbar({ toggle }) {
    return (
     // <!-- Header Navbar Section-->
      <section id="header">
        <div class="header container">
          <div class="nav-bar" >
            <div class="logo">
              <a href="#home"><h1>K  <span>/</span> D</h1></a>
            </div>
            <div class="nav-list" >
              <div class="hamburger" onClick={toggle}><div class="bar" ></div></div>
              <ul>
                <li><a href="#home" data-after="Home">Home</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     // <!-- End of Header Navbar Section -->
    )
}
