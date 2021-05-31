import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = (props) => {
    return (
      <section id="home" className='bg-home'>
      <div class="max-w-7xl mx-auto px-4 min-h-screen w-full flex justify-start items-center">
        <div>
          <div className='block w-fit-content text-6xl relative text-transparent ml-6 md:text-7xl xl:text-8xl'>
            <h1 className='mb-8'>Hello, <span className='absolute top-0 left-0 h-full w-0'></span></h1>
            <h1 className='mb-8'>My Name is <span className='absolute top-0 left-0 h-full w-0'></span></h1>
            <h1 className='mb-8'>{props.data ? props.data.name : 'Loading..'}  <span className='absolute top-0 left-0 h-full w-0'></span></h1>
          </div>
            <h2 className='relative block w-fit-content  ml-6 text-5xl my-16'>
              <Typewriter
                options={{
                  strings: ["I'm a Developer", "I'm a Creator", "I'm a Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <a href="#projects" type="button" className="border-2 border-red-700 rounded-xl text-2xl uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 ml-6 md:text-3xl md:py-3 md:px-6 xl:text-4xl">My Projects</a>
            <div className="flex justify-items-center mt-12 md:ml-6 lg:ml-12">
              <div className="m-2">
                <a href="https://www.linkedin.com/in/kenan-dolic/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material/48/ffffff/linkedin--v1.png" alt='linkedin' /></a>
              </div>
              <div className="m-2">
                <a href="https://github.com/kdolic" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt='github' /></a>
              </div>
              <div className="m-2">
                <a href="https://twitter.com/DolicKenan" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-rounded/48/ffffff/twitter.png" alt='twitter' /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home
