import React from 'react'
import Topmenu from '../sections/Topmenu'
import ContactForm from '../sections/ContactForm'
import SiteTitle from '../sections/SiteTitle'

const ContactPage = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle title="Contacts" />
        <ContactForm />
    </>
  )
}

export default ContactPage