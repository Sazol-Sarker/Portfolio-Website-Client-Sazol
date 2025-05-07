import myDp from "../../../assets/dpPortfolio1.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const [stopTyping, setStopTyping] = useState(false);
  const CVPdf ="https://drive.google.com/file/d/1LT8bBIYcldcnH1XICA8-G4rFHu9iGwz6/view?usp=sharing"
    // "https://drive.google.com/uc?export=download&id=1JTH9LbP-MhzmymndqFtm8E_5niW87E5w";

  return (
    <div id="about" className="flex w-full justify-center px-4">
      <motion.div
        initial={{ x: -120 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col w-full max-w-5xl gap-6 text-white pt-28 mb-10 md:mb-24"
      >
        {/* Mobile Image View */}
        <div className="md:hidden flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-2 rounded-full shadow-inner"
          >
            <img
              src={myDp}
              alt="Profile"
              // border-4 border-white
              className="w-40 h-40 object-cover rounded-full  shadow-lg shadow-indigo-400/70 transition hover:scale-105 duration-300"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
              {stopTyping ? (
                "Hi, I'm Sazol Sarker"
              ) : (
                <Typewriter
                  words={["Hi, I'm Sazol Sarker"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={0}
                  delaySpeed={1000}
                  onLoopDone={() => setStopTyping(true)}
                />
              )}
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-bold mt-2 md:mt-3">
              Software Engineer
            </p>
          </div>

          {/* Desktop Image View */}
          <motion.div
            initial={{ x: 120 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-2 rounded-full shadow-inner">
              <img
                src={myDp}
                alt="Profile"
                // border-4 border-white  hover:shadow-indigo-400/70
                className="w-60 h-60 object-cover rounded-full  shadow-xl shadow-indigo-400/70 transition hover:scale-105 duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-md md:text-2xl text-gray-300">
          {/* With over 2 years+ of professional experience building and maintaining
          full stack web applications. Specialized in React and NextJS along
          with Node and Express with a strong ability to solve problems and
          quickly learn new tools. */}
          {/* I’m a passionate full stack developer with over 5 years of programming
          experience, a strong foundation in problem solving, and 2300+ solved
          problems across various online judges. I’ve also participated in 150+
          programming contests. With hands-on project experience using modern
          frameworks like React, I enjoy building dynamic, high-performance web
          applications. I specialize in the MERN stack and have implemented
          Firebase authentication and role-based authorization in production
          projects. I thrive in fast-paced, innovative environments that value
          teamwork and continuous learning. */}
          Built and maintained full stack web applications using the MERN stack,
          with hands-on experience in React, Firebase authentication, and
          role-based authorization. With over 5 years of programming experience,
          solved 2300+ problems, participated in 150+ contests, and developed
          strong problem-solving and debugging skills. Thrive in fast-paced,
          innovative environments that value teamwork, continuous learning, and
          adapting to new technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="btn bg-slate-600/70 hover:bg-amber-300/70 text-slate-100"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView()
            }
            className="btn bg-slate-600/70 hover:bg-amber-300/70 text-slate-100"
          >
            View Projects
          </button>
          <button
            onClick={() => window.open(CVPdf, "_blank")}
            className="btn bg-slate-600/70 hover:bg-amber-300/70 text-slate-100"
          >
            View Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
