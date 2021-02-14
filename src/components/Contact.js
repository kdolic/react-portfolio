import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const ContactWrapper = styled.div`

// MOBILE
/* Contact Section */
#contact .contact {
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

#contact .contact-items {
  width: 400px;
}

#contact .contact-item {
  width: 85%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  padding: 15%;
  margin: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 18px 0 #0000002c;
  transition: 0.3s ease box-shadow;
}

#contact .contact-item:hover {
  box-shadow: 0px 0px 5px 0 #0000002c;
}

#contact .icon {
  width: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
}

#contact .contact-info h1 {
  color: crimson;
  font-size: 2rem;
  font-weight: 500;
}

#contact .contact-info h2 {
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
}
/*End of Contact Section */

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

  #contact .contact-items {
    width: 33%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
  }

  #contact .contact-item {
    width: 100%;
    border-radius: 10px;
    padding: 10%;
    margin: 10%;
    flex-direction: row;
  }

  #contact .icon {
    width: 60px;
  }

  #contact .contact-info h1 {
    color: crimson;
    font-size: 2rem;
  }

  #contact .contact-info h2 {
    font-size: 1.2rem;
  }
  /*End of Contact Section */
}

// DESKTOP
@media only screen and (min-width: 1200px) {
/* Contact Section */
#contact .contact-info h1 {
    color: crimson;
    font-size: 2.5rem;
  }

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

  .contact_info p {
    margin-bottom: 10px;
    margin-left: 35px;
  }
  /*End of Contact Section */
}
`

const Contact = () => {
    return (
        // <!-- Contact Section -->
        <ContactWrapper>
          <section id="contact">
            <div className="contact container">
              <div>
                <h1 className="section-title">Contact <span>Me</span></h1>
              </div>
              <div className='message'>
                <div className='formStyle'>
                <h2>Leave a Message:</h2>
                <form className='formStyle' name='contact' action='/contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
                  <input type='hidden' name='form-name' value='contact' />
                  <div hidden>
                    <input name="bot-field"/>
                  </div>
                  <input required id='fullName' name='fullName' type='text' placeholder='Your Name :' />
                  <input required id='email' name='email' type='email' placeholder='Email :' />
                  <input required id='subject' name='subject' type='text' placeholder='Subject :' />
                  <textarea name='message' type='text' placeholder='Your Message :' col='100' rows='8'></textarea>
                  <button type='submit'>Send Message</button>
                </form>
                </div>
              <div className='contact_info'>
                <h2>Contact <span>Info</span></h2>
                <h4>Feel free to contact me for career prospects, business services, and any other professional inquires.</h4>
                <div className='call'>
                  <PhoneIcon style={{fill: "crimson"}}/>
                  <h3>Call</h3>
                </div>
                  <p>(515) 473-5560</p>
                <div className="mail">
                  <MailIcon style={{fill: "crimson"}}/>
                  <h3>Email</h3>
                </div>
                  <p>kdolic@alumni.iastate.edu</p>
                <div className="location">
                  <LocationOnIcon style={{fill: "crimson"}}/>
                  <h3>Location</h3>
                </div>
                  <p>West Des Moines, IA</p>
              </div>
              </div>
            </div>
          </section>
        </ContactWrapper>
//   <!-- End of Contact Section -->
    )
}

export default Contact
