import React from "react";
import Swiggy from "../assets/portfolio/Swiggy.jpg";
import Youtube from "../assets/portfolio/youtube.jpg";
import Amazon from "../assets/portfolio/amazon.png";
import Weather from "../assets/portfolio/reactWeather.jpg";
import Shopping from "../assets/portfolio/shoppingapp.png";
import Porfolio from "../assets/portfolio/portfolio.jpg";

const Portfolio = () => {
  const card = [
    {
      id: 1,
      title: " Swiggy Clone",
      img: Swiggy,
      content:
        "To further develop my skills in React and state management, I created a Swiggy clone website with functionalities such as adding to cart, removing from cart, clearing the cart, changing the quantity of products added to cart, and displaying the total price at checkout. I used Redux for state management, learning about the store, slice, dispatching actions, and using hooks such as useReducer, useContext, and useSelector.It also includes the search functionality.Through Redux, I was able to manage the state of the cart and display the total price at checkout.The site is responsive and optimized for mobile devices, ensuring that users can easily order food on the go.Overall, building this Swiggy clone website was a valuable learning experience that helped me to develop my skills in React, Redux, and state management.",
        url: "https://swiggy-clone-srinath.netlify.app/"
    },
    {
    id: 2,
    title: " Youtube Clone",
    img: Youtube,
    content:
      "To build my skills in React, I created a YouTube clone website with routing and RapidAPI integration. It features a user-friendly interface for searching and watching videos, with a clean and modern design that includes personalized recommendations and related videos. I used React Router to create a smooth navigation experience, with clear paths for browsing videos by category, channel, or search query.By integrating RapidAPI, I was able to access YouTube's API and display relevant video data, such as views, likes, and comments. I also used basic hooks such as useState and useEffect to manage state and render data dynamically. Overall, building this YouTube clone website was a challenging project that helped me to develop my skills in React, routing, and API integration.",
      url:"https://youtube-clone-srinath.netlify.app/"
  },
  {
    id: 3,
    title: " Amazon Clone",
    img: Amazon,
    content:
      "As a beginner project in web development, I decided to focus on the UI design of Amazon's website, using basic skills in HTML, CSS, and JavaScript. The resulting website is responsive and user-friendly, with a clean and modern interface that showcases high-quality product images, clear product categories, and concise product descriptions. I used Flexbox to help with layout and design, ensuring that the site is both functional and visually appealing. Throughout the project, I paid close attention to detail and consistency in design, creating a cohesive and enjoyable user experience. Overall, this Amazon clone project has helped me to develop my skills in web development and UI design.",
      url: "https://amazon-clone-srinath.netlify.app/"
  },
  {
    id: 4,
    title: " weather App",
    img: Weather,
    content:
      "This is a weather app that uses the OpenWeatherAPI to display current weather conditions in different locations providing accurate and up-to-date weather information. I used React to create the user interface and integrated the OpenWeatherAPI to retrieve real-time weather data. The app is fully responsive and provides users with a clear and easy-to-use interface. The weather information is presented in a visually appealing way, with icons that make it easy to understand the current weather conditions.This was the first app I built using React which helped me to develop my React skills and gain experience with API integration. ",
      url:"https://weather-app-srinath.netlify.app/"
  },
  {
    id: 5,
    title: " Shopping App",
    img: Shopping,
    content:
      "This is a simple shopping app with features such as filtering products based on rating, availability, and delivery time. I used the faker.js library to generate realistic fake data for the products, and implemented automatic rating stars based on the product's rating.The shopping app utilizes hooks such as useReducer and useContext for efficient and complex state management.Users can easily filter products based on various parameters, making it easier to find products that meet their needs. The automatic rating stars provide a clear and visual indication of a product's quality.Overall, building this simple shopping app was an excellent opportunity to gain experience with React, state management without the help of redux, and learnt to implement all the basic functionalities necessary for an e-commerce website.",
      url: "https://shopping-app-srinath.netlify.app/"
  },
  {
    id: 6,
    title: " Personal Portfolio",
    img: Porfolio,
    content:
      "To showcase my skills as a front-end developer and to gain experience with React, I created a portfolio website that utilizes components and a single-page application architecture. The site is fully responsive.I used React components to create a dynamic and interactive user experience, allowing visitors to easily navigate between sections and learn more about my background, experience, and projects.One of the key features of the portfolio website is the email JS library, which allows visitors to send me messages directly from the site. This adds a level of interactivity and convenience, and demonstrates my knowledge of integrating third-party libraries into a project.Overall, building this portfolio website was an important step in my development as a front-end developer, as it allowed me to gain experience with React, components, and single-page applications.      ",
      url:"https://portfolio-srinath-m.netlify.app/"
  },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white   p-4 mx-auto  md:px-[80px]  flex flex-col justify-center"
    >
      <p className="text-4xl font-bold ">
        <u>Portfolio</u>
      </p>
      <p className="py-6 text-lg md:text-xl ">
        Check out some of my work right here
      </p>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6 px-12 sm:px-0">
        {card.map(({ id, title, img, content, url}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4 ">
              <h4 className="text-xl font-semibold text-blue-600 mb-2  ">{title}</h4>
              <p className="mb-2 leading-normal overflow-y-scroll h-[114px] scrollbar-hide">{content}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                <a href={url} target="_blank" rel="noreferrer">Live Url </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
