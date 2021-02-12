import React from 'react'
import styled from 'styled-components'
import resume from './../images/KenanDolicOnePage.pdf'

const AboutWrapper = styled.div `

/* About Section */
#about .about {
  flex-direction: column-reverse;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15% 12%;
}

#about .col-left {
  width: 250px;
  height: 360px;
}

#about .col-right {
  width: 100%;
}

#about .col-right h2 {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-bottom: 5%;
}

#about .col-right p {
  margin-bottom: 5%;
  font-size: 1.2rem;
}

#about .col-right .button {
  color: black;
  margin-bottom: 7%;
  padding: 2% 5%;
  font-size: 1.3rem;
}

#about .col-right .button:hover {
  color: white;
}

#about .col-left .about-img {
  height: 100%;
  width: 100%;
  position: relative;
  border: 10px solid white;
}

#about .col-left .about-img::after {
  content: "";
  position: absolute;
  left: -33px;
  top: 19px;
  height: 98%;
  width: 98%;
  border: 3px solid crimson;
  border-radius: 5px;
  z-index: -1;
}

#about .col-left .about-img img {
  border-radius: 10px;
}

/* End of About Section */

// TABLET
@media only screen and (min-width: 768px) {
   /* About Section */
   #about .about {
    flex-direction: row;
    padding: 1% 12%;
  }

  #about .col-left {
    width: 85%;
    height: 100%;
    padding-left: 6%;
  }

  #about .col-right {
    text-align: center;
    padding: 3%;
  }

  #about .col-right p {
  font-size: 1.4rem;
}

  #about .col-right .button {
    padding: 2% 5%;
    font-size: 1.8rem;
  }

  #about .col-left .about-img::after {
    left: -45px;
    top: 19px;
  }
  /* End of About Section */
}

// DESKTOP
@media only screen and (min-width: 1200px) {
    /* About Section */
    #about .about {
    padding: 1% 10%;
  }

  #about .col-right p {
  font-size: 1.5rem;
}

#about .col-right span {
  color: crimson;
}

  #about .col-right .button {
    font-size: 2rem;
  }
  /* End of About Section */
}
`

export default function About() {
    return (
// <!-- About Section -->
<AboutWrapper>
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
        <p>My name is Kenan. Currently a full-stack web development student at <span>Lambda School</span>. I enjoy creating user-friendly interfaces and web applications. I am constantly experimenting with new technologies and always striving to improve as a developer and designer. When I'm not coding, I enjoy working out, hiking, gaming, and spending time with family or friends.</p>
        <a href={resume} download class="button">Download Resume</a>
      </div>
    </div>
  </section>
</AboutWrapper>
    );
}
