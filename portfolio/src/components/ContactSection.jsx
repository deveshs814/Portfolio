import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Email */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold text-cyan-300 pl-16">Let’s Connect</h2>
          <a
            href="mailto:shukladevesh9814@gmail.com"
            className="inline-block mt-2 text-lg text-white bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-full transition-all duration-300"
          >
            📧 shukladevesh9814@gmail.com
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="text-center md:text-right space-y-4">
          <h3 className="text-2xl font-semibold text-cyan-400 pr-3">Social</h3>
          <div className="flex gap-6 justify-center md:justify-end text-3xl">
            <a
              href="https://github.com/deveshs814"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white text-gray-300 transition-transform transform hover:scale-125"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-shukla-5b3034232/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 text-gray-300 transition-transform transform hover:scale-125"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
