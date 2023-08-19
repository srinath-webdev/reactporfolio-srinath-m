import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white   p-4 mx-auto  md:px-[80px]  flex flex-col justify-center"
    >
      <p className="text-4xl font-bold">
        <u> About</u>
      </p>

      <p className=" my-4 text-lg md:text-xl">
        Hello! I'm Srinath , a passionate and creative Front-End Developer with
        a solid two years of experience in crafting immersive and user-friendly
        web experiences.
      </p>
      {/* <p className=" my-4 text-lg md:text-xl">
        I thrive on transforming design concepts into elegant and responsive
        websites, ensuring seamless functionality across various devices and
        browsers.
      </p> */}
      <p className=" my-4 text-lg md:text-xl">
        As a Front End Web developer, I enjoy tackling new challenges and
        continuously expanding my skillset.
      </p>
      <p className=" my-4 text-lg md:text-xl">
        I have a passion for working with Html , Css , Javascript and modern
        Javascript libraries and frameworks like React.js and Redux I am also
        interested in building new Web Technologies and Software.
      </p>
    </div>
  );
};

export default About;
