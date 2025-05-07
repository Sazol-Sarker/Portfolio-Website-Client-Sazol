import axios from "axios";
import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get("education.json").then((res) => {
      // console.log("Education==>", res.data);
      setEducation(res.data);
    });
  }, []);

  return (
    <div id="education" className="mt-10">
      <h2 className="text-white text-center text-xl md:text-3xl font-bold mb-8">Education</h2>

      <div className="flex flex-col gap-6 m-4 w-full mx-auto">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="relative pl-5 border-l-2 border-slate-600/70 text-white"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-600/70 border-2 border-white" />

            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                {edu.certificate}
              </h2>
              <h3 className="text-sm md:text-base text-gray-300 mt-1 md:mt-0">
                {edu.startDate} - {edu.endDate}
              </h3>
            </div>

            {/* Institution */}
            <h3 className="text-lg md:text-xl mt-1 w-full">{edu.institution}</h3>

            {/* Grade */}
            <div className="inline-block bg-slate-600/70 text-white rounded px-1 md:px-4 py-2 mt-3 text-sm md:text-base">
              {edu.grade} {edu.scale}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
