import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-us">
        <div className="container-small">
            <h1 className="contact-title">Come in Contact with us</h1>
            <form onsubmit="onSubmit(event)" novalidate>
                <div className="contact-form-box">
                    <label id="contactName-label" for="contact-name" hidden>Your name</label>
                    <input id="contactName" type="text" className="form-control" onkeyup="validate(event)" placeholder="Your name" required data-required-min="2" />
                    <div id="contactName-error" className="invalid-feedback">Please enter your name.</div>

                    <label id="contactEmail-label" for="contact-email" hidden>Your e-mail</label>
                    <input id="contactEmail" type="email" className="form-control" onkeyup="validate(event)" placeholder="Your e-mail" required data-required-min="5" />
                    <div id="contactEmail-error" className="invalid-feedback">Please enter your e-mail address.</div>
                </div>
                <div>
                    <label id="contactMessage-label" for="contact-message" hidden>Message</label>
                    <textarea id="contactMessage" name="contactMessage" className="form-control" onkeyup="validate(event)" placeholder="Message" required data-required-min="5"></textarea>
                    <div id="contactMessage-error" className="invalid-feedback">Please enter a message.</div>
                </div>
                <button type="submit" className="button-forms">SEND MESSAGE</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm