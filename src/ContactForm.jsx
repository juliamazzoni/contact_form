import { useState } from "react";

export const ContactForm = ({setMessageSent}) => {

  const [radioOption, setRadioOption] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true)
    console.log('its working')
  }

  const handleGeneralEnquireClick = () => {
    setRadioOption('general')
  }

  const handleSupportRequestClick = () => {
    setRadioOption('support')
  }

  return (
    <div className="container">
     <div className="form-container">

      <h1>Contact Us</h1>

        <form action="submit" onSubmit={handleSubmit} className="form">

          <div className="firstName-lastName">
            <div className="first-name">
              <label name='first-name'>First Name <span className="green">*</span></label>
              <input type="text" />
            </div>
            <div className="last-name">
              <label name='last-name'>Last Name <span className="green">*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="email-address">
            <label name='email'>Email Address <span className="green">*</span></label>
            <input type="email" />
          </div>

          <div className="query-type">
            <label >Query Type <span className="green">*</span></label>

            <div className="query-options">
              <div className={radioOption === 'general' ? 'green-background' : 'transparent'}>
                <input type="radio" name='query-type' onClick={handleGeneralEnquireClick}/> General Enquiry
              </div>
              <div className={radioOption === 'support' ? 'green-background' : 'transparent'}>
                <input type="radio" name='query-type' onClick={handleSupportRequestClick} /> Support Request 
              </div>
            
            </div>
          </div>

          <div className="message">
            <label name='message'>Message <span className="green">*</span></label>
            <textarea name="message" type='text'></textarea>
          </div>

          <div className="checkbox">
            <input type="checkbox" /> <p>I consent to being contacted by the team</p> <span className="green">*</span>
          </div>

          <button className="submit-button" type="submit" >Submit</button>

        </form>
      </div>
    </div>
   
  )
}