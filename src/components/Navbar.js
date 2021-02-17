import React from 'react'
import styled from 'styled-components'
import KDLogo2 from '../portfolio_ideas/KDLogo2.png';


const NavbarWrapper = styled.div`

// MOBILE
/* Header Navbar Section */
#header {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
}

#header .header {
  min-height: 8vh;
  background-color: rgba(31, 30, 30, 0.24);
  transition: 0.3s ease background-color;
}

#header .nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1300px;
}

#header .nav-list ul {
  list-style: none;
  position: absolute;
  background-color: rgb(31, 30, 30);
  width: 100vw;
  height: 100vh;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.2s ease left;
}

#header .nav-list ul.active {
  left: 0%;
}

#header .nav-list ul a {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  display: block;
}

#header .nav-list ul a::after {
  content: attr(data-after);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: rgba(240, 248, 255, 0.021);
  font-size: 6rem;
  letter-spacing: 2rem;
  z-index: -1;
  transition: 0.4s ease letter-spacing;
}

#header .nav-list ul li:hover a::after {
  transform: translate(-50%, -50%) scale(1);
  letter-spacing: initial;
}

#header .nav-list ul li:hover a {
  border-bottom: 2px solid crimson;
}

#header .hamburger {
  height: 50px;
  width: 50px;
  display: inline-block;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  transform: scale(0.8);
  margin-right: 20px;
}

#header .hamburger:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 2px solid red;
}

#header .hamburger .bar {
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;
}

#header .hamburger .bar::after,
#header .hamburger .bar::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: white;
  transition: 0.3s ease;
  transition-property: top, bottom;
}

#header .hamburger .bar::after {
  top: 8px;
}

#header .hamburger .bar::before {
  bottom: 8px;
}

#header .hamburger.active .bar::before {
  bottom: 0;
}

#header .hamburger.active .bar::after {
  top: 0;
}

.logo {
  width: 70px;
  height: 70px;
  margin-left: 5%;
}

/* End of Header NavbarSection */

// TABLET
@media only screen and (min-width: 768px) {
  /* Header Navbar Section */
  #header .nav-list ul a {
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    padding: 30px;
  }

  #header .nav-list ul a::after {
    font-size: 10rem;
  }

  #header .hamburger {
    height: 60px;
    width: 60px;
  }

  #header .hamburger .bar {
    width: 40px;
  }
  /* End of Header NavbarSection */
}

// DESKTOP
@media only screen and (min-width: 1024px) {
  /* Header Navbar Section */
  #header .hamburger {
    display: none;
  }
  #header .nav-list ul {
    position: initial;
    display: block;
    height: auto;
    width: fit-content;
    background-color: transparent;
  }
  #header .nav-list ul li {
    display: inline-block;
  }
  #header .nav-list ul li a {
    font-size: 1.8rem;
  }
  #header .nav-list ul a:after {
    display: none;
  }
  /* End of Header Navbar Section */
}
`

const Navbar = ({ toggle }) => {
    return (
     // <!-- Header Navbar Section-->
     <NavbarWrapper>
      <section id="header">
        <div class="header container">
          <div class="nav-bar" >
            <div class="logo">
              {/* <a href="#home"><h1>K  <span>/</span> D</h1></a> */}
            <img className='#home' src={KDLogo2} alt="logo"/>
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
     </NavbarWrapper>
     // <!-- End of Header Navbar Section -->
    )
}

export default Navbar
