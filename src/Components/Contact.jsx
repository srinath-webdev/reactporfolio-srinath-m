import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const[done,setdone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mr8onrb",
      "template_gu767kh",
      form.current,
      "-LKjbJV4il3k8w_jM"
    )
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div
    name="Contact"
    className="w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white md:px-[80px]"
  >
    <div className="flex flex-col p-4 justify-center  mx-auto h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-6">Submit the form below to get in touch with me</p>
      </div>

      <div className=" flex justify-center items-center">
        <form
          ref={form} onSubmit={sendEmail}
          className=" flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
       
          </button>
          <span className='text-emerald-300  font-semibold text-center mb-10'>{done && "Thanks for contacting me !! "}</span>
        </form>
      </div>
    </div>
  </div>
);
};

export default Contact;


