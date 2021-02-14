import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import code1 from '../images/code1.jpg'

const HomeWrapper = styled.div `

/* Home Section */
#home {
  background-image: url(${code1});
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 1;
}

#home::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: -1;
}

#home .home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10%;
  justify-content: flex-start;
}

#home h1 {
  display: block;
  width: fit-content;
  font-size: 3.8rem;
  position: relative;
  color: transparent;
  animation: text_reveal 0.5s ease forwards;
  animation-delay: 1s;
}

#home h2 {
  position: relative;
  color: whitesmoke;
  display: block;
  width: fit-content;
  animation: text_reveal 0.5s ease forwards;
  animation-delay: 5s;
  font-size: 3rem;
  margin-bottom: 5rem;
}

#home .button {
  font-size: 1.5rem;
}

#home h1:nth-child(1) {
  animation-delay: 1s;
}

#home h1:nth-child(2) {
  animation-delay: 2s;
}

#home h1:nth-child(3) {
  animation: text_reveal_name 0.5s ease forwards;
  animation-delay: 3s;
}

#home h1 span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
}

#home h1:nth-child(1) span {
  animation-delay: 0.5s;
}

#home h1:nth-child(2) span {
  animation-delay: 1.5s;
}

#home h1:nth-child(3) span {
  animation-delay: 2.5s;
}

/* End of Home Section */

// TABLET
@media only screen and (min-width: 768px) {
 /* Home Section */
 #home h1 {
    font-size: 5.2rem;
  }

  #home .button {
    font-size: 1.8rem;
  }
  /* End of Home Section */
}

// DESKTOP
@media only screen and (min-width: 1200px) {
  /* Home Section */
  #home h1 {
    font-size: 6rem;
  }

  #home .button {
    font-size: 2.2rem;
  }
  /* End of Home Section */
}

`

const Home = () => {
    return (
      //<!-- Home Section  -->
      <HomeWrapper>
        <section id="home">
          <div class="home container">
            <div>
              <h1>Hello, <span></span></h1>
              <h1>My Name is <span></span></h1>
              <h1>Kenan Dolic <span></span></h1>
              <h2>
                <Typewriter
                  options={{
                    strings: ["I'm a Developer", "I'm a Creator", "I'm a Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <a href="#projects" type="button" class="button">My Projects</a>
            </div>
          </div>
        </section>
      </HomeWrapper>
     // <!-- End of Home Section  -->
    )
}

export default Home
