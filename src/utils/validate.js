 
 export default function validate(formData) {
  const errors = {}
  if(!formData.firstName){
    errors.firstName = "First name is required."
  }

  if(!formData.lastName){
    errors.lastName = "Last name is required."
  }

  if(!formData.email){
    errors.email = "Please enter a valid email address."
  }

  if(!formData.radioTypeEnquires){
    errors.radioTypeEnquires = "Please select a query type."
  }

  if(!formData.message){
    errors.message = "Message is required."
  }

  if(!formData.consent){
    errors.consent = "To submit this form, please consent to being contacted."
  }

  return errors
}