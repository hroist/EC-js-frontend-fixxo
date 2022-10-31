import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (e, form = null) => {
        if (e.type === 'submit') {
         const errors = {}
         errors.name = validate_name(form.name)
         errors.email = validate_email(form.email)
         errors.message = validate_message(form.message)
         return errors
     
        } else {
             const {id, value} = e.target
             switch(id) {
                 case 'name':
                     return validate_name(value)
                 case 'email':
                     return validate_email(value)
                 case 'message':
                     return validate_message(value)
             }
        }
     }
     
     const validate_name = (value) => {
         if (!value){
             return 'Please enter your name.'
         }
         else if (value.length < 2)
             return 'Please enter a name with at least 2 characters.'
         else
             return null
     }
     
     const validate_email = (value) => {
         const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         
         if (!value)
             return 'Please enter your e-mail address.'
         else if (!regex_email.test(value))
             return 'Please enter a valid e-mail address (e.g. name@domain.com).'
         else
             return null
     }
     
     const validate_message = (value) => {
         if (!value)
             return 'Please write a message.'
         else if (value.length < 5)
             return 'Please enter a message with more than 5 characters.'
         else
             return null
     }
  
    const handleChange = (e) => {
      const {id, value} = e.target
  
      switch(id) {
        case 'name':
          setName(value)
          break
        case 'email':
          setEmail(value)
          break
        case 'message':
          setMessage(value)
          break
      }
  
      setErrors({...errors, [id]: validate(e)})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(e, {name, email, message}))
    
      if (errors.name === null && errors.email === null && errors.message === null) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
        setErrors({})
      } else {
        setSubmitted(false)
      }
    }

  return (
    <section className="contact-us">
        <div className="container-small">
            {
                submitted ? 
                (
                    <div>Thank you for your message!</div>
                ) 
                :
                (
                    <>
                        <h1 className="contact-title">Come in Contact with us</h1>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="contact-form-box">
                                <div>
                                    <input id="name" type="text" value={name} onChange={handleChange} className={`${ errors.name == null ? "" : "error" }`} placeholder="Your name" />
                                </div>
                                <div id="invalid-feedback-name" className={`invalid-feedback ${ errors.name == null ? "d-none" : "" }`}>{errors.name}</div>
                                <div>
                                    <input id="email" type="email" value={email} onChange={handleChange} className={`${ errors.email == null ? "" : "error" }`} placeholder="Your e-mail" />
                                </div>
                                <div id="invalid-feedback-email" className={`invalid-feedback ${ errors.email == null ? "d-none" : "" }`}>{errors.email}</div>
                            </div>
                            <div>
                                <textarea id="message" value={message} onChange={handleChange} className={`${ errors.name == null ? "" : "error" }`} placeholder="Message"></textarea>
                                <div className={`invalid-feedback ${ errors.message == null ? "d-none" : "" }`}>{errors.message}</div>
                            </div>
                            <button type="submit" className="button-forms">SEND MESSAGE</button>
                        </form>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactForm