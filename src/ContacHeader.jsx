import React from 'react'

const ContacHeader = () => {
  return (
    <div className='flex justify-between pt-4 pb-5 items-center'>
        <h1 className='text-white md:text-7xl max-md:text-4xl'><span className='text-custom-green'>Let's Get </span>In <br />Touch</h1>
        <div className='max-md:hidden flex text-center items-center'>
        <h1 className='border-t-2 mt-1 border-white w-28'></h1>
        <h1 className='text-white text-2xl'>{">"}</h1>
        </div>
        <h1 className='max-md:hidden text-white text-lg font-light'>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard <br />dummy text ever since </h1>
    </div>
  )
}

export default ContacHeader