import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Research from '../Research/Research'
import LeftDrawer from './../LeftDrawer/LeftDrawer';

const Home = () => {
  return (
    <>
      {/* <title>Sazol Portfolio | Home</title> */}
      <div className="">
        <About></About>
        {/* <LeftDrawer></LeftDrawer> */}
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Research></Research>
        <Languages></Languages>
        {/* <hr /> */}
        {/* <div className="divider my-5 text-lg"></div> */}
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
