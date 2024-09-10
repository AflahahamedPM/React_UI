import React from 'react'
import CourseDetailCards from './CourseDetailCards'
import courseCardDetails from './constants/courseCardDetails'

import { useState, useEffect } from 'react';

const CourseDetailsContainer = () => {
  const [displayedCards, setDisplayedCards] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  const updateDisplayedCards = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) { 
      setDisplayedCards(courseCardDetails); 
    } else { 
      setDisplayedCards([courseCardDetails[currentIndex]]); 
    }
  };

  useEffect(() => {
    updateDisplayedCards(); 
    window.addEventListener('resize', updateDisplayedCards); 

    return () => window.removeEventListener('resize', updateDisplayedCards); 
  }, [currentIndex]); 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courseCardDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courseCardDetails.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative md:w-11/12 max-md:w-9/12 mx-auto p-3 bg-black overflow-hidden rounded-3xl border border-gray-200 pb-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00ffff]/50"
        style={{
          backgroundImage:
            'radial-gradient(circle at bottom right, rgba(0, 100, 255, 0.5), rgba(0, 255, 255, 0.5), transparent 50%)',
          backgroundPosition: 'bottom right',
          backgroundSize: '50% 50%',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="lg:hidden flex justify-between items-center my-4">
        <button
          onClick={handlePrevious}
          className="border-[1px] border-white rounded-full text-xs hover:bg-custom-green hover:text-white text-custom-green px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="border-[1px] border-white rounded-full text-xs hover:bg-custom-green hover:text-white text-custom-green px-4 py-2"
        >
          Next
        </button>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex max-lg:w-full max-lg:overflow-auto gap-3 mt-4 text-white scrollbar-hide">
        {displayedCards.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-full min-w-full">
            <CourseDetailCards
              id={item.id}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsContainer