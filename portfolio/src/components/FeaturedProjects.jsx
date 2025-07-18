import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

import project1 from "../assets/HMS.png";
import project2 from "../assets/LetsChat.png";
import project3 from "../assets/StudentLMS frontend.png";
import project4 from "../assets/DevTinder.png";
import project5 from "../assets/Eatseasy.png";
import project6 from "../assets/Let'sgetfit.png";

const projects = [
  {
    name: "Hospital Management System",
    tech: [<FaReact className="text-blue-400" />, <FaNode className="text-green-400"/>, <SiMongodb className="text-green-400"/>, <SiTailwindcss className="text-sky-400"/>],
    description:
      "This Hospital Management System is a MERN stack project designed to streamline Doctor registration and  appointments. It enables doctors, staff, and administrators to efficiently handle hospital operations through a modern, responsive interface. The system ensures secure, real-time data access and role-based functionality for optimized healthcare services.",
    image: project1,
    color: "text-sky-400",
    github: "https://github.com/deveshs814/MERN_HOSPITAL_MANAGEMENT",
    live: "https://main--frontend24.netlify.app/",
  },
  {
    name: "Let's Chat",
    tech: [<FaReact className="text-blue-400" />, <FaNode className="text-green-400"/>, <SiMongodb className="text-green-400"/>, <SiTailwindcss className="text-sky-400"/>],
    description:
      "A real-time MERN chat app using Socket.IO with 32 customizable themes, enabling seamless messaging, dynamic UI switching, and smooth user interactions across all devices.",
    image: project2,
    color: "text-emerald-400",
    github: "https://github.com/deveshs814/Chat-app",
    live: "https://chat-app-10-3kow.onrender.com/login",
  },
  {
    name: "Student LMS ",
    tech: [<FaReact className="text-blue-400" />, <SiTailwindcss className="text-sky-400"/>],
    description:
      "A responsive Student LMS built with React and Tailwind CSS, offering features like course tracking, assignment submissions, progress analytics, and a clean, modern UI.",
    image: project3,
    color: "text-rose-400",
    github: "https://github.com/deveshs814/STUDENT-LMS-FRONTEND",
    live: "https://student-lms-frontend.vercel.app/",
  },
  {
    name: "DevTinder",
    tech: [<FaReact className="text-blue-400" />, <FaNode className="text-green-400"/>, <SiMongodb className="text-green-400"/>, <SiTailwindcss className="text-sky-400"/>],
    description:
      "DevTinder is a MERN-based developer matchmaking platform that allows users to update profiles, send and receive connection requests, and connect based on shared tech interests.",
    image: project4,
    color: "text-indigo-400",
    github: "https://github.com/deveshs814/devTinder-frontend",
    live: "https://devtinder-frontend-2.onrender.com/login",
  },
  {
    name: "Eat's Easy",
    tech: [<FaReact className="text-blue-400" />, <SiTailwindcss className="text-sky-400"/>],
    description:
      "A modern Food App built with React, Redux, and Tailwind CSS that lets users browse menus, manage carts, and place orders with a sleek, responsive UI.",
    image: project5,
    color: "text-pink-400",
    github: "https://github.com/deveshs814/Food-app",
    live: "https://sage-alpaca-f222c2.netlify.app/",
  },
  {
    name: "Let's Get Fit",
    tech: [<FaReact className="text-blue-400" />,<FaCss3Alt className="text-sky-400"/>],
    description:
      "A responsive Gym website frontend built with React and CSS, showcasing workout plans, trainer profiles, membership details, and a clean, user-friendly interface.",
    image: project6,
    color: "text-orange-400",
    github: "https://github.com/deveshs814/letsgetfit",
    live: "https://main--getfitds.netlify.app/",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white pt-24"
    >
      <h1 className="text-1xl font-bold text-center mb-8 text-gray-400 tracking-wide">
        FULL STACK DEVELOPER
      </h1>
      <h1 className="text-2xl font-bold text-center mb-8 text-cyan-400 tracking-wide">
        🌟 FEATURED PROJECTS 🌟
      </h1>
      <h1 className="text-1xl font-bold text-center mb-16 text-gray-400 tracking-wide">
        Focused on the experience
      </h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="flex flex-col md:flex-row bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 min-h-[370px] hover:shadow-[0_0_30px_#00FFFF33]"
          >
            
            <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-between bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg border-r border-white/10">
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${project.color}`}
                >
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((icon, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center text-base p-2 bg-white/10 border border-white/20 text-white rounded-full shadow-sm"
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                <p className="text-orange-200 text-sm md:text-base mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 text-sm rounded-full border border-white/20 transition"
                >
                  <FaGithub className="text-base" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-sm rounded-full text-white transition"
                >
                  <FaExternalLinkAlt className="text-sm" /> Live Demo
                </a>
              </div>
            </div>

            
            <div className="w-full md:w-[45%] p-4 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              <div className="rounded-2xl overflow-hidden border-[3px] border-white/10 shadow-inner shadow-cyan-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
