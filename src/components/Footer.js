import React from 'react'
import KDLogo2 from '../images/KDLogo2.png';


const Footer = (props) => {

    return (
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 h-80 flex justify-center">
        <div class="h-2 flex-col items-center justify-center pt-6 pb-6 ">
          <div class="logo flex justify-center">
            <img className='w-20 mb-6 md:w-28 ml-36 md:ml-40' src={KDLogo2} alt="logo"/>
          </div>
          <h2 className='text-white text-center text-2xl font-medium tracking-widest m-2 md:text-3xl'>Connect With Me</h2>
          <div className="flex justify-center mb-3">
            <div className="m-2">
              <a href={props.data ? props.data.linkedIn : 'Loading..'}target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material/48/ffffff/linkedin--v1.png" alt='linkedin' /></a>
            </div>
            <div className="m-2">
              <a href={props.data ? props.data.github : 'Loading..'} target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt='github' /></a>
            </div>
            <div className="m-2">
              <a href={props.data ? props.data.twitter : 'Loading..'} target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/twitter.png" alt='twitter' /></a>
            </div>
          </div>
          <h4 className='text-md text-white font-bold text-center mb-10'>© Kenan Dolic 2021</h4>
        </div>
      </section>
    )
}

export default Footer