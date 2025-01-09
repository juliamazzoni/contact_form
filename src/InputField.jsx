
export const InputField = ({inputClassName, label, name, handleOnChange, errors, type, text, radioOption, handleGeneralEnquireClick, handleSupportRequestClick }) => {

  const generalEnquire = radioOption === 'general' ? 'green-background' : 'transparent'
  const supportRequest = radioOption === 'support' ? 'green-background' : 'transparent'
  
  return (
    <>
    {inputClassName !== 'query-type' ?

    (<div>
      <div className={inputClassName}>
        {label && <label >{label} <span className="green">*</span></label>}
        {inputClassName === 'message' ?
        <textarea name={name} type={type} onChange={handleOnChange}  ></textarea> :
        <input type={type} name={name} onChange={handleOnChange} />}
        <div>
        {text && <p>{text} <span className="green">*</span></p>}
        {inputClassName !== 'checkbox' && errors && <span className="errors">{errors}</span>}
        </div>
        
      </div>
      {inputClassName === 'checkbox' && errors && <span className="errors">{errors}</span>}
  </div>) 
  
  :

  (<div className={inputClassName}>
  <label >{label} <span className="green">*</span></label>

  <div className="query-options">
    <div className={generalEnquire}>
      <input type={type} name={name} value='general-enquire' onClick={handleGeneralEnquireClick} onChange={handleOnChange}  /> General Enquiry
    </div>
    <div className={supportRequest}>
      <input type={type} name={name} value='support-request' onClick={handleSupportRequestClick} onChange={handleOnChange}  /> Support Request 
    </div>
    {errors && <span className="errors">{errors}</span>}
  </div>
</div>)
  }
  </>
  )
}