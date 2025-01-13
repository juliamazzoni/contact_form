
export const InputField = ({inputClassName, label, name, value1, value2, option1, option2, handleOnChange, errors, type, text, formData }) => {

  return (
    <>
    {type === 'radio' ?

    (<div className={inputClassName}>
      <label >{label} <span className="green">*</span></label>
      <div className="query-options">
        <div className={formData[name] === value1 ? 'green-background' : 'transparent'}>
          <input type={type} name={name} value={value1} onChange={handleOnChange}  /> {option1}
        </div>
        <div className={formData[name] === value2 ? 'green-background' : 'transparent'}>
          <input type={type} name={name} value={value2} onChange={handleOnChange}  /> {option2}
        </div>
      </div>
      {errors && <span className="errors">{errors}</span>}     
    </div>)
    
    :

    (<div>
      <div className={inputClassName}>
        {label && <label >{label} <span className="green">*</span></label>}
        {name === 'message' ?
        <textarea name={name} type={type} onChange={handleOnChange}  ></textarea> :
        <input type={type} name={name} onChange={handleOnChange} />}
        <div>
        {text && <p>{text}<span className="green">*</span></p>}
        {inputClassName !== 'checkbox' && errors && <span className="errors">{errors}</span>}
        </div>        
      </div>
      {inputClassName === 'checkbox' && errors && <span className="errors">{errors}</span>}
    </div>)  
    }
    </>

  )
}