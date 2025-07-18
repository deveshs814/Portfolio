import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiExpress,
} from "react-icons/si";

const experiences = [
  {
    company: "TechVerse Pvt Ltd",
    role: "Full Stack Developer",
    duration: "01 July 2024 - Present",
    description:
      "Developed and maintained scalable web apps using the MERN stack. Collaborated with designers and DevOps for smooth deployment and UI/UX consistency.",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-200" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
      { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
      { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
      { icon: <FaDatabase className="text-blue-400" />, name: "Database" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    ],
  },
  
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 tracking-wide">
        💼 EXPERIENCE
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-cyan-800/20 transition-all duration-300"
          >
            {/* Header: Company + Duration */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-cyan-300">
                  {exp.company}
                </h3>
                <p className="text-lg text-gray-300 mt-1">{exp.role}</p>
              </div>
              <div className="mt-2 md:mt-0 text-sm text-gray-400 font-medium">
                {exp.duration}
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4 mt-5">
              {exp.tech.map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 transition-transform duration-300 transform hover:scale-110"
                  title={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
