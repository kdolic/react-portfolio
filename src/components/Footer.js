import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`

// MOBILE
/* Footer Section */
#footer {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

#footer .footer {
  min-height: 200px;
  flex-direction: column;
  padding-top: 1%;
  padding-bottom: 1%;
}
#footer h1 {
  font-size: 2.5rem;
  margin-bottom: 1%;
}

#footer h2 {
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  margin: 1% auto;
}

#footer .social-icon {
  display: flex;
  margin-bottom: 10px;
}

#footer .social-item {
  height: 55%;
  width: 50%;
  margin: 2%;
}
/* End of Footer */

// TABLET
@media only screen and (min-width: 768px) {
/* Footer Section */
#footer h1 {
    font-size: 3.5rem;
  }

  #footer h2 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  /* End of Footer */
}

//DESKTOP
@media only screen and (min-width: 1200px) {
  /* Footer Section */
#footer h1 {
  font-size: 4rem;
}

#footer h2 {
  font-size: 2rem;
}
/* End of Footer */
}
`

export default function Footer() {
    return (
        // <!-- Footer -->
      <FooterWrapper>
        <section id="footer">
          <div class="footer container">
            <div class="logo"><h1><span>K</span>enan <span>D</span>olic</h1></div>
            <h2>Connect With Me</h2>
            <div class="social-icon">
              <div class="social-item">
                <a href="https://www.linkedin.com/in/kenan-dolic/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/48/000000/linkedin.png" alt='linkedin'/></a>
              </div>
              <div class="social-item">
                <a href="https://github.com/kdolic" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png" alt='github'/></a>
              </div>
              <div class="social-item">
                <a href="https://twitter.com/DolicKenan" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" alt='twitter'/></a>
              </div>
            </div>
            <h4>© Kenan Dolic 2021</h4>
          </div>
        </section>
      </FooterWrapper>
        // <!-- End of Footer -->
    )
}
