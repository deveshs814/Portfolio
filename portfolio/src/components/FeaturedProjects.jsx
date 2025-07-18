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

import project1 from "../assets/dev1.jpg";
import project2 from "../assets/dev1.jpg";
import project3 from "../assets/dev1.jpg";
import project4 from "../assets/dev1.jpg";
import project5 from "../assets/dev1.jpg";
import project6 from "../assets/dev1.jpg";

const projects = [
  {
    name: "DevTinder App",
    tech: [<FaReact />, <FaNode />, <SiMongodb />, <SiTailwindcss />],
    description:
      "DevTinder is a MERN-based matchmaking platform to connect devs. Find teammates, mentors, or co-founders with an elegant swipe UI.",
    image: project1,
    color: "text-sky-400",
    github: "https://github.com/deveshs814/devtinder",
    live: "https://devtinder.netlify.app",
  },
  {
    name: "Real Estate CRM",
    tech: [<FaReact />, <FaNode />, <SiMongodb />, <FaGithub />],
    description:
      "Custom CRM to manage leads, listings, and analytics for agents. Offers smart search, filters, and updates.",
    image: project2,
    color: "text-emerald-400",
    github: "https://github.com/deveshs814/realestate-crm",
    live: "https://realestatecrm.vercel.app",
  },
  {
    name: "Event Manager",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaNode />],
    description:
      "Web-based event registration with live seat tracking, QR codes, and role-based dashboard.",
    image: project3,
    color: "text-rose-400",
    github: "https://github.com/deveshs814/event-manager",
    live: "https://eventmanager.live",
  },
  {
    name: "Student Analytics",
    tech: [<FaReact />, <SiTailwindcss />, <FaGithub />],
    description:
      "Dashboard to visualize student performance, filter by subjects, attendance, and terms.",
    image: project4,
    color: "text-indigo-400",
    github: "https://github.com/deveshs814/student-analytics",
    live: "https://student-analytics.vercel.app",
  },
  {
    name: "Hospital UI",
    tech: [<FaReact />, <SiTailwindcss />, <FaJs />],
    description:
      "Frontend for hospital management system with modular patient, OPD/IPD, and pharmacy UI.",
    image: project5,
    color: "text-pink-400",
    github: "https://github.com/deveshs814/hospital-ui",
    live: "https://hospital-frontend.vercel.app",
  },
  {
    name: "MagicBricks Clone",
    tech: [<FaReact />, <FaNode />, <SiMongodb />],
    description:
      "A clone of MagicBricks with map integration, property CRUD and dynamic filtering.",
    image: project6,
    color: "text-orange-400",
    github: "https://github.com/deveshs814/magicbricks-clone",
    live: "https://magicbricks-clone.vercel.app",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
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
            {/* LEFT GLASS TEXT BLOCK */}
            <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-between bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg border-r border-white/10">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold ${project.color}`}>
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

                <p className="text-gray-200 text-sm md:text-base mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* BUTTONS */}
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

            {/* RIGHT IMAGE WITH FRAME */}
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
