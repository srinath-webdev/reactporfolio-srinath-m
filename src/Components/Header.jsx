import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const Links = [
    {
      id: 1,
      list: "Home",
    },
    {
      id: 2,
      list: "About",
    },
    {
      id: 3,
      list: "Portfolio",
    },
    {
      id: 4,
      list: "Experience",
    },
    {
      id: 5,
      list: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed shadow-lg ">
      <div>
        <h2 className="text-3xl font-signature ml-2 ">Srinath</h2>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, list }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link
              
                to={list}
                smooth
                duration={500}
              >
                {list}
              </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"> 
            {Links.map(({ id, list }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={list}
                smooth
                duration={500}
              >
                {list}
              </Link>
            </li>
          ))}

            </ul>
        )
      }
    </div>
  );
};

export default Header; 
