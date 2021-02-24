import React from 'react'
import Burger from './Burger'
import KDLogo2 from '../../images/KDLogo2.png';

const Navbar = () => {
    return (
      <>
          <section id="header">
            <div class="header container">
              <div class="nav-bar" >
                <div className="logo">
                  <img className='#home' src={KDLogo2} alt="logo"/>
                </div>
              </div>
              </div>
          </section>
          <Burger />
      </>
      )
}

export default Navbar
