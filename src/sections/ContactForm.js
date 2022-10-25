import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', message: ''})
    const [formErrors, setFormErrors] = useState({name: ""})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regEx_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "Please enter your name."
        else if(values.name.length < 2)
            errors.name = "Please enter a name with at least 2 characters."

        if(!values.email)
            errors.email = "Please enter your e-mail address."
        else if(!regEx_email.test(values.email))
            errors.email = "Please enter a valid e-mail address (e.g. name@domain.com)."

        if(!values.message)
            errors.message = "Please write a message."
        else if(values.message.length < 3)
            errors.message = "Please enter a message with more than 3 characters."

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else 
            setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
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
                                    <input id="name" type="text" value={contactForm.name} onChange={handleChange} placeholder="Your name" />
                                </div>
                                <div className="invalid-feedback">{formErrors.name}</div>
                                <div>
                                    <input id="email" type="email" value={contactForm.email} onChange={handleChange} placeholder="Your e-mail" />
                                </div>
                                <div className="invalid-feedback">{formErrors.email}</div>
                            </div>
                            <div>
                                <textarea id="message" value={contactForm.message} onChange={handleChange} placeholder="Message"></textarea>
                                <div className="invalid-feedback">{formErrors.message}</div>
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