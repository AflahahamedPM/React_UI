import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col ml-4">
      <div className="max-md:flex gap-4">
      <div className="mb-8">
        <h1 className="text-gray-500 font-extralight ">Phone</h1>
        <h1 className="text-white text-xl font-light">9656300567</h1>
        <h1 className="text-white text-xl font-light">9037206760</h1>
      </div>
      <div className="mb-12">
        <h1 className="text-gray-500 font-extralight">Email</h1>
        <h1 className="text-white text-xl font-light">Admissions.Co.In</h1>
      </div>
      </div>
      <div className="mb-12">
        <h1 className="text-gray-500 font-extralight">Address</h1>
        <h1 className="text-white text-xl font-light">Education</h1>
        <h1 className="text-white text-xl font-light">
          2nd Floor, Cental Arcade.
        </h1>
        <h1 className="text-white text-xl font-light">Cherooty Road,</h1>
        <h1 className="text-white text-xl font-light">Calicut - 673032</h1>
      </div>
    </div>
  );
};

export default ContactDetails;
