import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const ContactWrapper = styled.div`

// TABLET
@media only screen and (min-width: 768px) {
/* Contact Section */
#contact .contact {
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    min-width: 20vh;
  }
  /*End of Contact Section */
}

// DESKTOP
@media only screen and (min-width: 1200px) {
/* Contact Section */
  .message {
    width: 90%;
    display: flex;
  }

  .formStyle h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .formStyle {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .formStyle input {
    text-indent: 15px;
    height: 3vh;
  }

  .formStyle textarea {
    text-indent: 15px;
  }

  .formStyle button {
    margin-top: 10px;
    width: 25%;
    padding: 5px;
    border-radius: 15px;
    border-color: crimson;
    background-color: white;
    color: black;
  }

  .formStyle button:hover {
  background-color: crimson;
  color: white;
}

.contact_info {
  display: flex;
  flex-direction: column;
}

  .contact_info h2 {
    font-size: 2.5rem;
  }

  .contact_info h3 {
    font-size: 2rem;
    margin-left: 10px;
  }

  .call {
    margin-top: 10px;
    margin-left: 15px;
    display: flex;
    align-items: baseline;
  }

  .mail {
    margin-top: 10px;
    margin-left: 15px;
    display: flex;
    align-items: baseline;
  }

  .location {
    margin-top: 10px;
    margin-left: 15px;
    display: flex;
    align-items: baseline;
  }
  /*End of Contact Section */
}
`

const Contact = () => {
    return (
      <section id="contact">
      <div className="max-w-7xl my-0 mx-auto min-h-screen w-full flex flex-col items-center justify-center">
        <div>
          <h1 className="section-title md:text-7xl xl:text-8xl">Contact <span>Me</span></h1>
        </div>
        <div className='w-4/5 lg:flex lg:flex-row'>
          <div className='lg:w-full'>
          <h2 className='text-2xl font-medium my-4 text-center lg:mt-20 md:text-3xl xl:text-4xl'>Leave a Message:</h2>
          <form className='flex flex-col' name='contact' action='/contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact' />
            <div hidden>
              <input name="bot-field"/>
            </div>
            <div className="flex flex-col p-2">
              <input className='mb-4 p-2 border border-black placeholder-gray-700 rounded-lg md:p-3 md:text-lg' required id='fullName' name='fullName' type='text' placeholder='Your Name :' />
              <input className=' p-2 border border-black placeholder-gray-700 rounded-lg md:p-3 md:text-lg' required id='email' name='email' type='email' placeholder='Email :' />
            </div>
            <div className="flex flex-col p-2">
              <input className='mb-4 p-2 border border-black placeholder-gray-700 rounded-lg md:p-3 md:text-lg' required id='subject' name='subject' type='text' placeholder='Subject :' />
              <textarea className='mb-6 p-2 border border-black placeholder-gray-700 rounded-lg md:p-3 md:text-lg' name='message' type='text' placeholder='Your Message :' col='100' rows='6'></textarea>
              <button className="self-center border-2 border-red-700 rounded-xl text-xl uppercase tracking-wider text-black hover:bg-red-700 hover:text-white transition ease-in p-3 md:text-2xl md:py-3 md:px-6" type='submit'>Send Message</button>
            </div>
          </form>
          </div>
        <div className='lg:w-3/5 lg:flex lg:flex-col lg:ml-16'>
          <h2 className='text-2xl font-medium mt-20 mb-4 text-center md:text-3xl xl:text-4xl'>Contact <span>Info</span></h2>
          <h4 className='text-lg mb-10 text-center md:text-xl'>Feel free to contact me for career prospects, business services, and any other professional inquires.</h4>
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
