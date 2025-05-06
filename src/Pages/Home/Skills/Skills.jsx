import axios from "axios";
import { useEffect, useState } from "react";
import Skill from "../Skill/Skill";

const Skills = () => {
  const [skills,setSkills]=useState([])
  // load data
  useEffect(()=>{
    axios.get('skills.json')
    .then(res=>{
      console.log("Skills==>",res.data);
      setSkills(res.data)
    })
  },[])


  // map data , render by card
  return (
    <>
      <title>Portfolio | Skills</title>
      <div id="skills" className="w-full mx-auto mt-15">
        <h2 className="text-xl md:text-3xl font-bold text-white text-center mb-5">
          Skills
        </h2>

        {/* skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {
          skills.map((skill,idx)=><Skill key={idx} skill={skill} ></Skill>)
        }
        </div>

        
      </div>
    </>
  );
};

export default Skills;
