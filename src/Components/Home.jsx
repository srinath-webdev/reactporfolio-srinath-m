import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import srinath from "../assets/srinath.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  md:px-[80px]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl  font-bold text-white">
          I'm a Front End Developer
        </h1>
        <p className="text-gray-500 py-4 max-w-md">
          I have 2+ years of experience building and desigining Web Application.
          Currently, I love to work on web technologies like React, Tailwind,
          and Javascript.
        </p>
        <div>
          <Link
            to="Portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer md:justify-normal"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <AiOutlineArrowRight size={25} className="ml-1" />
            </span>
          </Link>

        </div>
       
      </div>
      <div className="pb-6">
        <img
          src={srinath}
          alt="srinath"
          className="rounded-2xl mx-auto w-2/3  md:w-[450px]"
        />
      </div>
      </div>
    </div>
  );
};

export default Home;
