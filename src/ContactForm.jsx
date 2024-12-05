
export const ContactForm = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('its working')
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form action="submit" onSubmit={handleSubmit} className="form">

        <div className="firstName-lastName">
          <div className="first-name">
            <label name='first-name'>First Name *</label>
            <input type="text" />
          </div>
          <div className="last-name">
            <label name='last-name'>Last Name *</label>
            <input type="text" />
          </div>
        </div>

        <div className="email-address">
          <label name='email'>Email Address *</label>
          <input type="email" />
        </div>

        <div className="query-type">
          <label name='query-type'>Query Type *</label>

          <div className="query-options">
            <div>
              <input type="radio" /> General Enquiry
            </div>
            <div>
              <input type="radio" /> Support Request 
            </div>
          
          </div>
        </div>

        <div className="message">
          <label name='message'>Message *</label>
          <input name="message" type='text'></input>
        </div>

        <div className="checkbox">
          <input type="checkbox" /> I consent to being contacted by the team *
        </div>

        <button className="submit-button" type="submit" >Submit</button>

      </form>
    </div>
  )
}