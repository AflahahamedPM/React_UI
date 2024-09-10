import React from "react";
import AboutSchoolCards from "./AboutSchoolCards";
import aboutCardDetails from "./constants/aboutCardsDetails";

const AboutSchoolContainer = () => {
  return (
    <div className="w-full h-[550px] pt-4 bg-black">
      <div className="border-[1px] border-white w-11/12 rounded-[30px] h-[500px] mx-auto">
        <div className="flex justify-between max-md:flex-col">
          <h1 className="lg:text-3xl text-2xl tracking-widest font-bold text-white m-6 ">
            <span className="text-custom-green">About of </span> School Of
            Science
            <br className="max-lg:hidden" />& Management
          </h1>
          <div className="flex flex-col justify-between lg:mx-24 lg:my-6 mx-6 my-2">
            <h1 className="max-lg:hidden text-xs font-light text-white">
              Academy is fully accredited institution with its headquarter in
              <br />
              Calicut. The institution prides itself for being a vibrant effort
              <br />
              from the part of highly experienced entrepreneurs who had
              <br />
              successfully proved themselves in a range of academic fields
            </h1>
            <h1 className="lg:hidden text-sm text-justify font-normal text-white">
              Regnanz Academy Is a fully accredited institution with its
              headquarter in Calicut. The institution prides itself for being a
              vibrant effort from the part of highly experienced entrepreneurs
              who had successfully proved themselves in a range of academic
              fields
            </h1>
            <button className="border-[1px] self-end border-white rounded-full text-xs hover:bg-custom-green hover:text-white text-custom-green px-4 py-1 mt-4">
              Read more
            </button>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 flex max-lg:w-full max-lg:overflow-x-auto gap-3 mt-4 text-white scrollbar-hide">
          {aboutCardDetails.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full min-w-full">
            <AboutSchoolCards
              id={item.id}
              title={item.title}
              description={item.description}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSchoolContainer;
