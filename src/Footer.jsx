import React from "react";
import ContactDetails from "./ContactDetails";
import Explore from "./Explore";
import Courses from "./Courses";
import gradientImage4 from "/gradient4.png"

const Footer = () => {
  return (
    <div className="relative bg-black w-full pb-8"
    >
      <div className="w-9/12 md:h-[530px] mx-auto border-[1px] border-white rounded-xl md:flex">
        <div className="mx-6 md:my-32 max-md:my-6">
          <ContactDetails />
        </div>
        <div className="md:my-28 max-md:my-12 md:w-6/12 max-md:w-10/12 md:ml-52 max-md:mx-6 gap-12 md:flex justify-between">
        <Explore />
        <Courses />
      </div>
      </div>
      <img src={gradientImage4} alt="" className="absolute -bottom-2 mb-2"/>
    </div>
  );
};

export default Footer;
