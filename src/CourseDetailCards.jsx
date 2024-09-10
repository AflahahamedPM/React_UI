import React, { useState } from "react";

const CourseDetailCards = ({ title, description }) => {
  
  return (
    <div className="relative border-[1px] border-custom-green md:w-[380px] max-md:w[300px] md:h-[390px] max-md:[420px] rounded-[30px] px-4 flex flex-col justify-between mx-auto"
    >
      <div>
        <h1 className="text-2xl bg-gradient-to-r from-custom-green to-white bg-clip-text mt-5 text-transparent mb-4">
          {title}
        </h1>
        <h1 className="text-base text-justify">{description}</h1>
      </div>
      <button className="border-[1px] border-white rounded-full text-xs hover:bg-custom-green hover:text-white text-custom-green mb-5 self-end w-40 px-4 py-2">
        Read more
      </button>
    </div>
  );
};

export default CourseDetailCards;
