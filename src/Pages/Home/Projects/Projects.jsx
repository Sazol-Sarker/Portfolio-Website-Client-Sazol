import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { HiExternalLink } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Projects = () => {
  // store data
  const [projects, setProjects] = useState([]);

  // load data
  useEffect(() => {
    axios.get("projects.json").then((res) => {
      // console.log("projects=>", res.data);
      setProjects(res.data);
    });
  }, []);
  return (
    <>
      {/* <title>Portfolio | Projects</title> */}
      <div id="projects" className="my-15">
        <h2 className="text-xl md:text-3xl font-bold text-white text-center mb-5">
          Projects
        </h2>
        {/* project div */}
        <div className="flex flex-col items-center">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                className="w-full max-w-4xl text-white border-2 my-5 rounded-md hover:bg-slate-700/20  p-5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div
                    onClick={() => window.open(project?.links?.live, "_blank")}
                    className="flex items-center text-blue-500 text-xl md:text-2xl hover:cursor-pointer"
                  >
                    {project.title}
                    <HiExternalLink className="text-3xl ml-2" />
                  </div>

                  <div>{project.timeline}</div>
                </div>
                <p className="mt-5 text-md md:text-lg">
                  <span className="text-3xl text-green-600">
                    {project.description.split("")[0]}
                  </span>
                  {project.description.slice(1)}
                </p>
                <ul className="list-disc ml-2 pt-5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-md md:text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* technologies badge */}
                <div className="flex flex-wrap mt-5 mb-3 gap-2">
                  {project.technologies.map((tech, idx) => {
                    return (
                      <div
                        key={idx}
                        className="text-sm md:text-md text-white bg-gray-700 px-2 py-1 rounded-xl"
                      >
                        {tech.title}
                      </div>
                    );
                  })}
                </div>

                {/* btns */}
                <div className="flex flex-col md:flex-row gap-4 *:uppercase mt-5">
                  {project?.links?.live ? (
                    <button
                      onClick={() => {
                        const newTab = window.open(
                          project?.links?.live,
                          "_blank",
                          "noopener, noreferrer"
                        );
                        if (newTab) newTab.opener = null;
                      }}
                      className="btn btn-outline  bg-slate-600/70 text-md md:text-lg text-amber-400 border-none rounded-xl"
                    >
                      Live
                      <CgWebsite className="text-lg" />
                    </button>
                  ) : (
                    ""
                  )}

                  {project?.links?.client ? (
                    <button
                      onClick={() => {
                        const newTab = window.open(
                          project?.links?.client,
                          "_blank",
                          "noopener, noreferrer"
                        );
                        if (newTab) newTab.opener = null;
                      }}
                      className="btn btn-outline bg-slate-600/70 text-md md:text-lg text-amber-400 border-none rounded-xl"
                    >
                      client <FaGithub className="text-lg" />
                    </button>
                  ) : (
                    ""
                  )}

                  {project?.links?.server ? (
                    <button
                      onClick={() => {
                        const newTab = window.open(
                          project?.links?.server,
                          "_blank",
                          "noopener, noreferrer"
                        );
                        if (newTab) newTab.opener = null;
                      }}
                      className="btn btn-outline bg-slate-600/70 text-md md:text-lg text-amber-400 border-none rounded-xl "
                    >
                      server <FaGithub className="text-lg" />
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
