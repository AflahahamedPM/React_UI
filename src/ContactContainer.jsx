import React from 'react'
import ContacHeader from './ContacHeader'
import ContactBody from './ContactBody'

const ContactContainer = () => {
  return (
    <div className='w-full bg-black pb-10'>
        <div className='w-10/12 mx-auto'>
            < ContacHeader />
            < ContactBody />
        </div>
    </div>
  )
}

export default ContactContainer