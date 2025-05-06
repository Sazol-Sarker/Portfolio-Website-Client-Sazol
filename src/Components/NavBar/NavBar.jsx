import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoOptions } from "react-icons/io5";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView()}
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => document.getElementById("skills")?.scrollIntoView()}
        >
          Skills
        </button>
      </li>
      <li>
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView()}
        >
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={() => document.getElementById("education")?.scrollIntoView()}
        >
          Education
        </button>
      </li>
      <li>
        <button
          onClick={() => document.getElementById("research")?.scrollIntoView()}
        >
          Research
        </button>
      </li>
      {/* <li>
        <button onClick={()=>document.getElementById('experience')?.scrollIntoView()}>Experience</button>
      </li> */}
      <li>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
        >
          Contact
        </button>
      </li>
      <div className="flex items-center">
        <li>
          <button title="Visit my github">
            <FaGithub className="text-xl hover:text-green-400" />
          </button>
        </li>
        <li>
          <button title="Visit my linkedIn">
            <FaLinkedinIn className="text-xl hover:text-green-400" />
          </button>
        </li>

        <li>
          <button title="Email me">
            <MdEmail className="text-xl hover:text-green-400" />
          </button>
        </li>
      </div>
      <Link to="/login">
        <button className="btn">Admin Login</button>
      </Link>
    </>
  );
  return (
    // <div className="navbar fixed z-50 top-0 left-0 bg-base-400 bg-opacity-50 text-white shadow-sm">
    <div className="navbar w-full mx-auto px-4 fixed z-20 bg-slate-800 bg-opacity-70  text-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg> */}
            <IoOptions className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-70 rounded-box z-1 mt-3 w-52 p-2 shadow text-white *:hover:text-amber-500 *:text-lg"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Portfolio
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link to="" className="btn">
          Admin Login
        </Link> */}
      </div>
    </div>
  );
};

export default NavBar;
