import React from 'react'
import KDLogo2 from '../portfolio_ideas/KDLogo2.png';


const Footer = () => {

    return (
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 h-80 flex justify-center">
        <div class="h-2 flex-col items-center justify-center pt-6 pb-6 ">
          <div class="logo flex justify-center">
            <img className='w-20 mb-6 md:w-24' src={KDLogo2} alt="logo"/>
          </div>
          <h2 className='text-white text-center text-2xl font-medium tracking-widest m-2 md:text-3xl'>Connect With Me</h2>
          <div className="flex justify-center mb-3">
            <div className="m-2">
              <a href="https://www.linkedin.com/in/kenan-dolic/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/48/000000/linkedin.png" alt='linkedin'/></a>
            </div>
            <div className="m-2">
              <a href="https://github.com/kdolic" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png" alt='github'/></a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/DolicKenan" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" alt='twitter'/></a>
            </div>
          </div>
          <h4 className='text-md font-bold text-center mb-10'>© Kenan Dolic 2021</h4>
        </div>
      </section>
    )
}

export default Footer