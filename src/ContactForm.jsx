import React from 'react'

const ContactForm = () => {
  return (
    <form className='bg-white p-4 md:w-1/3 max-md:w-full h-[400px] mr-20 rounded-lg'>
        <h1 className='mb-6 text-2xl font-bold'>Contact</h1>
        <input type="text" name="" id="" placeholder='First Name' className='w-10/12 outline-none border-b-2 mb-6' />
        <input type="text" name="" id="" placeholder='Last Name' className='w-10/12 outline-none border-b-2 mb-6' />
        <input type="text" name="" id="" placeholder='Email' className='w-10/12 outline-none border-b-2 mb-6' />
        <input type="text" name="" id="" placeholder='Phone' className='w-10/12 outline-none border-b-2 mb-6' />
        <div className='relative flex justify-between items-center w-full'>
        <input type="text" name="" id="" placeholder='Courses' className='w-10/12 outline-none border-b-2 mb-6' />
        <span className='absolute right-20 text-2xl text-gray-500 mb-7 rotate-180'>^</span>
        </div>
        <button className='py-3 rounded-xl w-10/12 bg-custom-green hover:bg-green-400 font-semibold text-lg'>Submit</button>
    </form>
  )
}

export default ContactForm