import React from "react";

const LeftDrawer = () => {
  return (
    <>
      <div className="fixed w-1/14 top-1/2 left-0 transform -translate-y-1/2 py-4">
        {/* Button Container */}
        <div className="btn-group btn-group-vertical space-y-4">
          <button className="btn btn-outline w-full text-white bg-slate-700 transform transition-all hover:scale-x-50">
            Github
          </button>
          <button className="btn btn-outline w-full text-white bg-slate-700 transform transition-all hover:scale-x-50">
            LinkedIn
          </button>
          <button className="btn btn-outline w-full text-white bg-slate-700 transform transition-all hover:scale-x-50">
            Email
          </button>
          <button className="btn btn-outline w-full text-white bg-slate-700 transform transition-all hover:scale-x-50">
            Admin Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftDrawer;
