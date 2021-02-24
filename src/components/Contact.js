import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Contact = () => {
    return (
      <section id="contact">
      <div className="max-w-7xl my-0 mx-auto min-h-screen w-full flex flex-col items-center justify-center">
        <div>
          <h1 className="section-title mt-20 text-5xl md:text-7xl xl:text-8xl">Contact <span>Me</span></h1>
        </div>
        <div className='w-4/5 lg:w-11/12 lg:flex lg:flex-row'>
          <div className='lg:w-full'>
          <h2 className='text-2xl font-medium my-4 text-left lg:mt-20 md:text-3xl xl:text-4xl'>Leave a Message:</h2>
          <form className='flex flex-col' name='contact' action='/contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact' />
            <div hidden>
              <input name="bot-field"/>
            </div>
            <div className="flex flex-col p-2 lg:flex-row lg:space-x-4">
              <input className='mb-2 p-2 border border-black placeholder-gray-700 rounded-md md:p-3 md:text-lg lg:w-full' required id='fullName' name='fullName' type='text' placeholder='Your Name :' />
              <input className='mb-2 4 p-2 border border-black placeholder-gray-700 rounded-md md:p-3 md:text-lg lg:w-full' required id='email' name='email' type='email' placeholder='Email :' />
            </div>
            <div className="flex flex-col p-2">
              <input className='mb-4 p-2 border border-black placeholder-gray-700 rounded-md md:p-3 md:text-lg' required id='subject' name='subject' type='text' placeholder='Subject :' />
              <textarea className='mb-6 p-2 border border-black placeholder-gray-700 rounded-md md:p-3 md:text-lg' name='message' type='text' placeholder='Your Message :' col='100' rows='6'></textarea>
              <button className="text-center w-1/2 sm:w-1/3 border-2 border-red-700 rounded-lg text-lg uppercase tracking-wider text-black hover:bg-red-700 hover:text-white transition ease-in p-3 md:text-xl md:py-3 md:px-6" type='submit'>Send Message</button>
            </div>
          </form>
          </div>
        <div className='lg:w-3/5 lg:flex lg:flex-col lg:ml-16'>
          <h2 className='text-2xl font-medium mt-20 mb-4 text-left md:text-3xl xl:text-4xl'>Contact <span>Info</span></h2>
          <h4 className='text-lg text-left mb-10 md:text-xl lg:mb-0'>Feel free to contact me for career prospects, business services, and any other professional inquires.</h4>
          <div className='flex items-center lg:mt-8'>
            <PhoneIcon style={{fill: "crimson"}}/>
            <h3 className='text-xl ml-4 font-medium md:text-2xl'>Call</h3>
          </div>
            <p className='pl-10 mb-6 text-lg md:text-xl'>(515) 473-5560</p>
          <div className='flex items-center'>
            <MailIcon style={{fill: "crimson"}}/>
            <h3 className='text-xl ml-4 font-medium md:text-2xl'>Email</h3>
          </div>
            <p className='pl-10 mb-6 text-lg md:text-xl'>kdolic@alumni.iastate.edu</p>
          <div className='flex items-center'>
            <LocationOnIcon style={{fill: "crimson"}}/>
            <h3 className='text-xl ml-4 font-medium md:text-2xl'>Location</h3>
          </div>
            <p className='pl-10 text-lg md:text-xl'>West Des Moines, IA</p>
        </div>
        </div>
      </div>
      </section>
  )
}

export default Contact
