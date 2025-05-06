import React from "react";

const Languages = () => {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center gap-4 my-14">
        <h2 className="text-xl md:text-3xl font-bold text-white">Languages</h2>
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between">
          <h3 className="text-white">Bangla</h3>
          <p className="text-slate-200">Native</p>
        </div>
        <progress
          className="progress progress-info w-full"
          value={100}
          max="100"
        ></progress>
      </div>

      <div className="w-3/4 mx-auto">
        <div className="flex justify-between">
          <h3 className="text-white">English</h3>
          <p className="text-slate-200">Excellent</p>
        </div>
        <progress
          className="progress progress-info w-full"
          value={80}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Languages;
