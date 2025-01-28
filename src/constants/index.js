import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer and a graduate of NIT Calicut with a knack for crafting scalable web applications. With hands-on experience, I specialize in crafting user-friendly applications using modern technologies like React, Node.js, Firebase, MongoDB, MySQL and Redux. My goal is to leverage my expertise to create innovative solutions that drive business growth, deliver exceptional user experiences and continuously grow as a developer. I am passionate about problem-solving and love tackling complex challenges with efficient, innovative solutions`;


export const PROJECTS = [
  {
    title: "Book Store app",
    image: project1,
    description:
      "A full-stack web application that allows users to browse, purchase, and manage books online. Built using the MERN stack, the app features a user-friendly interface, a secure login, and a shopping cart for efficient order management. The admin dashboard enables inventory management, with the ability to add, update, and remove books. With a responsive design, the app offers a seamless experience across devices, making it easy for both customers and administrators to navigate.",
    technologies: [ "React", "Node.js", "MongoDB", , "Express.js", "Firebase", "Redux","Vercel","TailwindCSS",],
  },
  {
    title: "Netflix Clone App",
    image: project2,
    description:
      "A web application built with React to replicate the core features of Netflix. Users can browse and search for movies and TV shows, view trailers, and access detailed information about each item, it also fetches trending and genre-specific movies. The responsive design ensures that the app works flawlessly on both desktop and mobile devices.",
    technologies: ["HTML", "React,","Swiper.js","TMDB API","YouTubeAPI","Firebase Hosting"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["TailwindCSS", "React", "Bootstrap","Framer Motion"],
  },
  {
    title: "Expense Tracker App",
    image: project4,
    description:
      "a MERN stack-based web application designed to help users manage their expenses effectively. With features like user authentication via Firebase, the app allows users to securely log in, track their income and expenses, and view their financial data through dynamic charts and summaries. The responsive design ensures a smooth experience on any device, making financial management accessible anytime, anywhere.",
    technologies: ["HTML", "CSS", "React", "Express", "MongoDB", "Node.js"],
  },
];

export const CONTACT = {
  email: "bharathrmofficial@gmail.com",
};
