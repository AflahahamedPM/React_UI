import React from 'react'
import CourseDetailCards from './CourseDetailCards'
import courseCardDetails from './constants/courseCardDetails'

const CourseDetailsContainer = () => {
  return (
    <div className="relative md:w-11/12 max-md:w-9/12 mx-auto p-3 bg-black overflow-hidden rounded-3xl border border-gray-200 pb-4">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00ffff]/50"  
         style={{
           backgroundImage: 'radial-gradient(circle at bottom right,  rgba(0, 100, 255, 0.5),rgba(0, 255, 255, 0.5), transparent 50%)',
           backgroundPosition: 'bottom right',
           backgroundSize: '50% 50%',
           backgroundRepeat: 'no-repeat'
         }}>
    </div>
         <div className="lg:grid lg:grid-cols-3 flex max-lg:w-full max-lg:overflow-auto gap-3 mt-4 text-white scrollbar-hide">
          {courseCardDetails.map((item) => (
            <div key={item.id} className='flex-shrink-0 w-full min-w-full'>
            <CourseDetailCards
              id={item.id}
              title={item.title}
              description={item.description}
            />
            </div>
          ))}
        </div>
        <div className='md:hidden flex gap-4 justify-center items-center'>
          <button className='px-4 py-2 bg-custom-green text-xl'>{"<"}</button>
          <button className='px-4 py-2 bg-custom-green text-xl'>{">"}</button>
        </div>
    </div>
  )
}

export default CourseDetailsContainer