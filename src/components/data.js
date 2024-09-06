import Uber from './ub.png'
import Math from './ma.png'
import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import { motion } from 'framer-motion';
  
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { BiLogoPostgresql } from "react-icons/bi";
  

import Chem from './Screenshot 2024-08-22 051054.png'
import Far from './far.png'
import Future from './online-education-with-smartphone-flat-vector-illustration-banner-landing-page_128772-939.avif'
import dark from './Screenshot 2024-08-22 121639.png'
export const data=[
    {
     id:1,
     title:'UberEats',
     description:'A front-end web application which I built in August 2024, The project features TailWindCSS, React Hooks, Axios CallAPIMethod using Spoonacular API, Responsive Design Principles, Dynamic Data Rendering, and Smooth React Scroll. If you want to get the best out of your diet, Then definitely Give it a try',
    image:(<motion.img src={Uber} whileHover={{scale:1.1}} className='w-full object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"></motion.img>),
    href:'https://ubereats-three.vercel.app/'
    },{
        id:2,
        title:'October Math Gems',
        description:'A front-end project I cobuilt in December 2022, The project features the use of Bootstrap core components, CSS loaders. The project aims to dismantle math illiteracy across Egypt through posting daily handouts for IMOs fans, challenging problems with their solutions, publishing our community scientific research on various topics in Mathematics and Physics. If you are a Science maniac, Just Check it out',
        image:(<motion.img src={Math} whileHover={{scale:1.1}} className='w-full object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"/>),
        href:'https://euro-max.github.io/stemship/'
    },{
      id:3,
      title:'Green Soil Warriors',
      description:'A Capstone Project I built in November 2022 for my graduation year at STEM, The project aims to monitor soils moisture and temperature using Arduino MicroController and Moisture Sensors, The Arduino sends the data to FireBase RealTime Database from where the dashboard reads data and displays it using Chart.js and Vanilla JavaScript. The project features DarkMode and Speech Recognition',
      image:(<motion.img src={dark} whileHover={{scale:1.1}} className='w-full object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"/>),
      href:'https://github.com/Euro-max/Capstone-323'
    },{
    id:4,
    title:'October Chemistry Club',
    description:'A front-end project I built in August 2022, The project features the use of CSS Box Model, Bootstrap Carousel. The website provides great resources for Chemistry enthusiasts and for those who want to delve deep into Chemistry for their research',
    image:(<motion.img src={Chem} whileHover={{scale:1.1}} className='w-full object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"/>),
    href:'https://euro-max.github.io/OctoberChemistry.github.io/'
    },{
        id:5,
        title:'TraveList',
        description:'TravelList App where the user can enter what he needs for a faraway trip. This app is a simple implementation of React Basics: Components JSX Props UseState and Controlled Elements Events Deriving State Lifting up a State Modern JavaScript ES6 concepts',
        image:(<motion.img src={Far} whileHover={{scale:1.1}} className='w-full object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"/>),
        href:'https://travel-list-pearl.vercel.app/'

    },{
        id:6,
        title:'Future Project',
        description:'Anything new will be added here',
        image:(<motion.img src={Future} whileHover={{scale:1.1}} className='w-[90%] object-cover h-[400px] transition-transform duration-500 group-hover:scale-110' alt="Eat"/>),
        href:'#'
    }
]

  /*export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];*/
  
  
  
  
  
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
      name: "Next.js",
      experience: "1+ year",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
      name: "Redis",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "PostgreSQL",
      experience: "1+ year",
    },
  ];