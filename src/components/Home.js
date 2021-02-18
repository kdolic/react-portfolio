import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
      <section id="home" className='bg-home'>
      <div class="max-w-7xl mx-auto px-4 min-h-screen w-full flex justify-start items-center">
        <div>
          <div className='block w-fit-content text-6xl relative text-transparent ml-6 md:text-7xl xl:text-8xl'>
            <h1 className='mb-8'>Hello, <span className='absolute top-0 left-0 h-full w-0'></span></h1>
            <h1 className='mb-8'>My Name is <span className='absolute top-0 left-0 h-full w-0'></span></h1>
            <h1 className='mb-8'>Kenan Dolic <span className='absolute top-0 left-0 h-full w-0'></span></h1>
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
            <a href="#projects" type="button" className="border-2 border-red-700 rounded-xl text-2xl uppercase tracking-wider text-white hover:bg-red-700 hover:text-white transition ease-in p-3 md:text-3xl md:py-3 md:px-6 xl:text-4xl">My Projects</a>
          </div>
        </div>
      </section>
    )
}

export default Home
