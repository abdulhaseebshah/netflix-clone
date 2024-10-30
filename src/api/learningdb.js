import reactJS from "../assets/reactjs.jpg";
import webBoot from "../assets/web-boot.jpg";

// export const bannerData = {
//   title: "The Complete ReactJs Course - Basics to Advanced",
//   thumbnail: reactJS,
//   overview:
//     "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. By the end of this course, you'll have the skills to create basic web pages and understand the building blocks of web applications.",
//   videoLink: "https://tinyurl.com/2a2opsl6",
// };

export const courseDetails = [
  {
    title: "The Complete ReactJs Course - Basics to Advanced",
    overview:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. By the end of this course, you'll have the skills to create basic web pages and understand the building blocks of web applications.",
    thumbnail: reactJS,
    videoLink: "https://tinyurl.com/2a2opsl6",
    orignal_price: 3099,
    price: 499,
    isFree: true,
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    overview:
    "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    thumbnail: webBoot,
    videoLink: "https://tinyurl.com/2a2opsl6",
    orignal_price: 2299,
    price: 599,
    isFree: false,
  },
];

const randomBannerData = () => {
  const randomIndex = Math.floor(Math.random() * courseDetails.length);
  return courseDetails[randomIndex];
};

export const bannerData = randomBannerData();
