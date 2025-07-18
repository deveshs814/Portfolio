import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import img1 from "../assets/dev1.jpg";
import img2 from "../assets/dev2.jpg";
import img3 from "../assets/dev3.jpg";

const images = [img1, img2, img3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Devesh Shukla."],
      typeSpeed: 50,
      backSpeed: 40,
      showCursor: false,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-32 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left pl-6 md:pl-16 mt-[-20px]"
      >
        
        <h1
          ref={el}
          className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg"
        ></h1>

        
        <p className="mt-4 text-lg md:text-xl max-w-lg px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-inner">
          A <span className="text-cyan-300 font-semibold">passionate</span>{" "}
          software developer, combines technical expertise with innovative
          problem-solving to deliver robust solutions that exceed expectations.
        </p>

        
        <div className="mt-6 flex gap-6 justify-center md:justify-start">
          <a
            href="https://github.com/deveshs814"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/devesh-shukla-5b3034232/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
        </div>
      </motion.div>

   
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative w-[300px] md:w-[420px] h-[500px] bg-white/5 opacity-90 rounded-2xl backdrop-blur-lg overflow-hidden shadow-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Devesh"
              className="w-full h-full object-cover absolute top-0 left-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
