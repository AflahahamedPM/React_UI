import React from "react";
import facebookImage from "/facebook.png";
import instagramImage from "/instagram.png";
import linkedinImage from "/linkedin.png";

const Courses = () => {
  return (
    <>
      <div className="flex flex-col gap-6 cursor-pointer">
        <h1 className="text-custom-green">Courses</h1>
        <h1 className="text-white font-light">
          Full Stack Developer and Certification courses
        </h1>
        <h1 className="text-white font-light">Bachelor of Commerce (Bcom)</h1>
        <h1 className="text-white font-light">BBA Computer Application</h1>
        <h1 className="text-white font-light">
          Bsc computer science -AI and Data Science{" "}
        </h1>
        <h1 className="text-white font-light">BBA Aviation Management</h1>
      </div>
      <div className="flex self-end justify-end h-12 mt-8 gap-4">
        <button className="py-1 px-3 bg-custom-green rounded-lg">
          <img src={facebookImage} alt="" />
        </button>
        <button className="py-1 px-3 bg-custom-green rounded-lg">
          <img src={instagramImage} alt="" />
        </button>
        <button className="py-1 px-3 bg-custom-green rounded-lg">
          <img src={linkedinImage} alt="" />
        </button>
      </div>
    </>
  );
};

export default Courses;
