import { useState } from "react";
import validate from "./utils/validate";
import { InputField } from "./InputField";

export const ContactForm = ({setMessageSent}) => {

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
      setTimeout(() => {
        setMessageSent(false)
      }, 3000);
    }
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
            <InputField inputClassName="input" label="First Name" type="text" name="firstName" handleOnChange={handleOnChange} errors={errors.firstName}/>
            <InputField inputClassName="input" label="Last Name" type="text" name="lastName" handleOnChange={handleOnChange} errors={errors.lastName}/>
          </div>

          <InputField inputClassName="input" label="Email Address" type="email" name="email" handleOnChange={handleOnChange} errors={errors.email}/>

          <InputField inputClassName="input" label="Query Type" name="radioTypeEnquires" value1="general-enquire" option1="General Enquire" value2="support-request" option2="Support Request" formData={formData} type="radio" handleOnChange={handleOnChange} errors={errors.radioTypeEnquires} />

          <InputField inputClassName="input" label=" Message" name="message" type="text" handleOnChange={handleOnChange} errors={errors.message}/>

          <InputField inputClassName="checkbox" name="consent" type="checkbox" handleOnChange={handleOnChange} text="I consent to being contacted by the team" errors={errors.consent}/>
        
          <button className="submit-button" type="submit" >Submit</button>

        </form>
      </div>
    </div>
   
  )
}