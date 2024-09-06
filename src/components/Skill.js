import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import C from '../components/icons8-c++-96.png'
  
  import { RiReactjsLine } from "react-icons/ri";

  import { IoLogoFirebase } from "react-icons/io5";
  import { IoLogoJavascript } from "react-icons/io5";
  import { SiTailwindcss } from "react-icons/si";
  import { FaPython } from "react-icons/fa";
  import { IoLogoHtml5 } from "react-icons/io5";
  import { SiAdobepremierepro } from "react-icons/si";
  import { SiAdobeillustrator } from "react-icons/si";
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "2+ months",
    },
    {
      icon: <IoLogoFirebase className="text-4xl text-yellow-600 lg:text-5xl" />,
      name: "FireBase",
      experience: "1 year",
    },
    {
      icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
      name: "JavaScript",
      experience: "3+ years",
    },
    {
      icon: <SiTailwindcss className="text-4xl text-blue-400 lg:text-5xl" />,
      name: "TailWindCSS",
      experience: "1+ year",
    },
    {
      icon: <FaPython className="text-4xl text-yellow-500 lg:text-5xl" />,
      name: "Python",
      experience: "2 years",
    },
    {
      icon: <IoLogoHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "HTML",
      experience: "6 years",
    },
    {
        icon: <SiAdobepremierepro className="text-4xl text-violet-800 lg:text-5xl" />,
        name: "Premiere Pro",
        experience: "2+ years",
      },
      {
        icon: <SiAdobeillustrator className="text-4xl text-orange-500 lg:text-5xl" />,
        name: "Adobe Illustrator",
        experience: "1 year",
      },
      {
        icon: <img className='object-cover w-[70px] h-[70px]' src={C} alt='LOL'></img>,
        name: "C++",
        experience: "2+ Years",
      },
  ];