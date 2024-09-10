import React from "react";
import learnerBenefitImage from "/learnerBenefit.png";
import gradientImage3 from "/gradient3.png";
import shapeImage from "/Vector 5.png";
import girlImage2 from "/girlImage2.png";
const BenefitsContainer = () => {
  return (
    <div className="w-full pt-8 bg-black">
      <div
        className="w-10/12 mx-auto md:flex md:justify-start"
        style={{
          backgroundImage: `url(${gradientImage3})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <img
          src={learnerBenefitImage}
          alt="learnerBenefitImage"
          className="max-md:hidden"
        />
        <div className="md:hidden relative">
          <h1 className=" text-white text-4xl mb-12">
            <span className="text-custom-green">Learner</span> Benefits
          </h1>
          <img src={shapeImage} alt="" />
          <h1 className="absolute text-white text-xl top-28 left-4">
            World Class Pedagogy
          </h1>
          <h1 className="absolute text-white text-xs top-40 left-4">
            Learn from the World’s Best Faculty & Industry Experts. Learn with
            fun Hands-on Exercises & Assignments. Participate in Hackathons &
            Group Activities.
          </h1>
          <h1 className="absolute text-white text-xl top-60 left-4">
            Career Assistance
          </h1>
          <h1 className="absolute text-white text-xs top-72 left-4">
            Resume Building & Mock Interview Prep. <br />50+ Institution Options. <br />
            Interview Prep.
          </h1>
          <h1 className="absolute text-white text-xl top-[360px] left-4">
            Gamified Learning
          </h1>
          <h1 className="absolute text-white text-xs top-[400px] left-4">
            Dedicated Learning Managers. <br />
            24*7 learning Support. <br />
            Network with Peers & Interact <br />
            with Industry Leaders.
          </h1>
          <img
            src={girlImage2}
            alt="girl Image 2"
            className="absolute top-[250px] right-1"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsContainer;
