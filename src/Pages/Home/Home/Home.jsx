import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";

const Home = () => {
  return (
    <>
      <title>Sazol Portfolio | Home</title>
      <div className="">
        <About></About>
        <Skills></Skills>
        <Languages></Languages>
      </div>
    </>
  );
};

export default Home;
