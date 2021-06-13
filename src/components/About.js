import React from 'react'
import Fade from 'react-reveal/Fade'
import resume from './../images/KDResume.pdf'

const About = (props) => {
    return (
      <section id="about" className='flex justify-center'>
        <Fade top duration={1500}>
      <div className="flex-col-reverse text-center max-w-7xl my-auto min-h-screen flex items-center justify-center md:flex-row md:py-2 md:px-4 ">
        <div className='w-2/4 md:w-4/5 md:h-full md:pl-32 xl:px-4'>
          <div class="about-img mt-10">
            <img className='rounded-3xl flex justify-center' src="https://i.ibb.co/L62btyj/Professional-Photo-1.jpg" alt="img"></img>
          </div>
        </div>
        <div className='w-full px-16 text-center md:text-center md:p-20'>
          <h1 class="section-title text-5xl md:text-7xl xl:text-8xl">About <span>me</span></h1>
          <h2 className='text-3xl font-medium tracking-widest mb-10'>{props.data ? props.data.title : 'loading...'}</h2>
          <p className='text-center text-xl tracking-wider mb-20 md:text-2xl'>{props.data ? props.data.paragraph : 'loading...'}</p>
          <a href={resume} download className='border-2 border-red-700 rounded-xl text-xl uppercase tracking-wider text-black hover:bg-red-700 hover:text-white transition ease-in p-3 md:text-2xl md:py-3 md:px-8 xl:text-3xl'>Download Resume</a>
        </div>
      </div>
      </Fade>
      </section>
    );
}

export default About
