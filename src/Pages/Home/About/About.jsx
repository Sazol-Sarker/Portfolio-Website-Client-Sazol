import myDp from "../../../assets/dp.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const [stopTyping, setStopTyping] = useState(false);
  const CVPdf =
    "https://drive.google.com/uc?export=download&id=1JTH9LbP-MhzmymndqFtm8E_5niW87E5w";
  return (
    <div id="about" className="flex w-full ">
      <motion.div
        initial={{ x: -120 }} // Start off-screen to the left
        animate={{ x: 0 }} // Move to original position
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col w-full mx-auto gap-4  *:text-white pt-28 mb-24"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
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

            <p className="text-xl md:text-3xl text-gray-500 font-bold mt-2 md:mt-3">
              Software Engineer
            </p>
          </div>
          {/* <motion.div
            initial={{ x: 120 }} // Start off-screen to the left
            animate={{ x: 0 }} // Move to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center mt-8"
          >
            <img
              src={myDp}
              alt="Profile picture"
              className="w-48 h-48 rounded-full border-8 border-black/50 shadow-xl shadow-black hover:shadow-primary/80 transition duration-300"
            />
          </motion.div> */}

          {/* Image Section */}
          <motion.div
            initial={{ x: 120 }}
            animate={{ x: -5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=" hidden md:flex justify-center items-center"
          >
            <img
              src={myDp}
              alt="Profile"
              className="w-56 h-56 md:w-60 md:h-60 my-5 rounded-full border-4 border-white shadow-[0_0_30px_#6366f1] hover:shadow-[0_0_50px_#6366f1] transition duration-500"
            />
          </motion.div>
        </div>

        <p className="text-md md:text-2xl">
          With over 2 years+ of professional experience building and maintaining
          full stack web applications. Specialized in React and NextJS along
          with Node and Express with a strong ability to solve problems and
          quickly learn new tools.
        </p>

        {/* buttons - about section */}
        <div className="flex flex-col md:flex-row gap-2">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="btn hover:bg-amber-300"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView()
            }
            className="btn hover:bg-amber-300"
          >
            View Projects
          </button>
          <button onClick={() => window.open(CVPdf, "_blank")} className="btn hover:bg-amber-300">
            View Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
