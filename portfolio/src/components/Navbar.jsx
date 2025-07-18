import React from "react";
import { FaUserAlt, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%]">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg px-6 py-3 flex justify-between items-center">
        
        {/* NAME - OUTSIDE BLUR EFFECT */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-widest text-cyan-400 drop-shadow-lg">
          DEVESH
        </div>

        {/* NAV ITEMS */}
        <div className="hidden md:flex space-x-10 items-center text-white text-[17px] font-medium">
          <a
          
            href="#about"
            className="flex items-center gap-2 hover:text-cyan-300 transition duration-300"
          >
            <FaUserAlt className="text-cyan-300" />
            About
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-cyan-300 transition duration-300"
          >
            <FaProjectDiagram className="text-cyan-300" />
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
