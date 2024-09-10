import React from "react";
import gradientImage2 from "/gradient2.png";
import CourseDetailsContainer from "./CourseDetailsContainer";

const CourseContainer = () => {
  return (
    <div className="bg-black w-full">
      <div
        className="flex w-full flex-col justify-center text-center items-center mb-16"
        style={{
          backgroundImage: `url(${gradientImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "260px",
        }}
      >
        <button
          className="px-8 py-3 mt-32 rounded-full text-white font-normal text-lg
                       bg-gradient-to-r from-teal-400/30 to-teal-500/30
                       backdrop-blur-md
                       border border-white/20
                       shadow-lg shadow-teal-500/30
                       hover:shadow-teal-500/40 hover:bg-gradient-to-r hover:from-teal-400/40 hover:to-teal-500/40
                       transition-all duration-300 ease-in-out"
        >
          Courses
        </button>

        <h1 className="md:text-7xl max-md:text-4xl text-white mt-4"><span className="text-custom-green">Courses</span> Available</h1>
        <h1 className="text-white mt-3 tracking-wider"> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cras Vitae Blandit Lectus. Praesent At <br /> Hendrerit Velit, At Dictum Nisl</h1>
      </div>
      <CourseDetailsContainer />
    </div>
  );
};

export default CourseContainer;
