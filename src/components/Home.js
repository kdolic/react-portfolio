import React from 'react'
import Typical from 'react-typical'

export default function Header() {
    return (
      //<!-- Home Section  -->
      <section id="home">
        <div class="home container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name is <span></span></h1>
            <h1>Kenan Dolic <span></span></h1>
            <h2> I'm a{' '}

              <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'Developer ',
                2500,
                'Creator',
                2500,
                'Designer',
                2500,
              ]}
              />
              
            </h2>
            <a href="#projects" type="button" class="button">My Projects</a>
          </div>
        </div>
      </section>
     // <!-- End of Home Section  -->
    )
}
