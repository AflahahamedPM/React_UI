import React from 'react'
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
const ContactBody = () => {
  return (
    <div className='md:flex justify-between '>
        <ContactDetails />
        <ContactForm />
    </div>
  )
}

export default ContactBody