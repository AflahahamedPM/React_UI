import navImage from "/navImage.png";
import details from "/details.png";
import firstGirlImage from "/firstGirlImage.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div
      className="relative h-screen w-screen overflow-x-hidden flex flex-col"
      style={{
        backgroundImage: `url(${navImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 max-md:bg-gradient-to-l lg:bg-gradient-to-b from-transparent to-black"></div>

      <nav className="relative p-4 mx-auto w-11/12 flex lg:border-b-[1px] border-white justify-end items-center z-10">
        <ul className="max-lg:hidden flex space-x-20">
          <li>
            <a href="#" className="text-white hover:text-green-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-300">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-300">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-green-300">
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-green-800"
            >
              Contact
            </a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="text-white md:hidden text-3xl"/>
      </nav>

      <main className="relative flex-1 flex flex-col mt-20 text-white p-8 z-10">
        <h2 className="lg:text-sm max-md:text-lg mb-2">
          Professional Certification & Degree Programs
        </h2>
        <h1 className="lg:text-5xl text-3xl font-bold mb-4">
          Accelerate your <span className="text-custom-green ">Career</span>
          <br />
          <span className="text-custom-green">Growth</span> & Upskill Yourself
        </h1>
        <div className="flex justify-between items-center bg-gray-800 rounded-full lg:w-[480px] max-lg:w-[300px] overflow-hidden mb-8">
          <input
            type="email"
            placeholder="Enter your Email"
            className="bg-transparent p-3 flex-between text-white focus:outline-none"
          />
          <button className="bg-custom-green text-gray-900 px-6 py-2 mr-2 rounded-full">
            Send
          </button>
        </div>
      </main>

      <div className="relative flex w-full z-10">
        <img src={details} className="lg:w-7/12 w-full h-[80%] mx-8 mb-8" />
        <img src={firstGirlImage} className="absolute lg:bottom-2 lg:right-16 max-md:left-14 h-[500px] mx-4 bottom-24 " />
      </div>
    </div>
  );
};

export default Navbar;
