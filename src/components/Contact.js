import React from 'react'

export default function Contact() {
    return (
        // <!-- Contact Section -->
  <section id="contact">
    <div className="contact container">
      <div><h1 className="section-title">Contact <span>Me</span></h1></div>
      <div className='message_form'>
        <h2>Leave a Message:</h2>
        <form name='contact' action='/contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <input name='fullName' type='text' placeholder='Your Name :' />
          <input name='email' type='email' placeholder='Email :' />
          <input name='subject' type='text' placeholder='Subject :' />
          <textarea name='message' type='text' placeholder='Your Message :' col='30' rows='10' />
          <button type='submit'>Send Message</button>
        </form>
      </div>
      <div className='contact_info'>
        <h2>Contact <span>Info</span></h2>
        <p>Feel free to contact me for career prospects, and any other professional inquires</p>
        <h3>Call</h3>
        <p>(515) 473-5560</p>
        <h3>Email</h3>
        <p>kdolic@alumni.iastate.edu</p>
        <h3>Location</h3>
        <p>West Des Moines, IA</p>
      </div>
    </div>
  </section>
//   <!-- End of Contact Section -->
    )
}
