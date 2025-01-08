import { useState } from "react";
import validate from "./utils/validate";

export const ContactForm = ({setMessageSent}) => {

  const [radioOption, setRadioOption] = useState('')
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData)

    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)

    } else {
      setMessageSent(true)
      setErrors({})
    }
  }

  const handleGeneralEnquireClick = () => {
    setRadioOption('general')
  }
  const handleSupportRequestClick = () => {
    setRadioOption('support')
  }
  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className="container">
     <div className="form-container">

      <h1>Contact Us</h1>

        <form action="submit" onSubmit={handleSubmit} className="form">

          <div className="firstName-lastName">
            <div className="first-name">
              <label >First Name <span className="green">*</span></label>
              <input type="text" name='firstName' onChange={handleOnChange} />
              {errors.firstName && <span className="errors">{errors.firstName}</span>}
            </div>

            <div className="last-name">
              <label >Last Name <span className="green">*</span></label>
              <input type="text" name='lastName' onChange={handleOnChange} />
              {errors.lastName && <span className="errors">{errors.lastName}</span>}
            </div>
          </div>

          <div className="email-address">
            <label >Email Address <span className="green">*</span></label>
            <input type="email" name='email' onChange={handleOnChange} />
            {errors.email && <span className="errors">{errors.email}</span>}
          </div>

          <div className="query-type">
            <label >Query Type <span className="green">*</span></label>

            <div className="query-options">
              <div className={radioOption === 'general' ? 'green-background' : 'transparent'}>
                <input type="radio" name='queryType' value='general-enquire' onClick={handleGeneralEnquireClick} onChange={handleOnChange}  /> General Enquiry
              </div>
              <div className={radioOption === 'support' ? 'green-background' : 'transparent'}>
                <input type="radio" name='queryType' value='support-request' onClick={handleSupportRequestClick} onChange={handleOnChange}  /> Support Request 
              </div>
              {errors.queryType && <span className="errors">{errors.queryType}</span>}
            </div>
          </div>

          <div className="message">
            <label >Message <span className="green">*</span></label>
            <textarea name="message" type='text' onChange={handleOnChange}  ></textarea>
            {errors.message && <span className="errors">{errors.message}</span>}
          </div>

          <div>
            <div className="checkbox">
              <input type="checkbox" name="consent" onChange={handleOnChange} /> <p>I consent to being contacted by the team</p> <span className="green">*</span>
            </div>
            {errors.consent && <span className="errors">{errors.consent}</span>}
          </div>
          

          <button className="submit-button" type="submit" >Submit</button>

        </form>
      </div>
    </div>
   
  )
}