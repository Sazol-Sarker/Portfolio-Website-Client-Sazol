import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoOptions } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from "../../Providers/AuthProvider/AuthContext";
import Swal from "sweetalert2";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const { user, setUser, loading, setLoading, googleSignIn, logoutUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  console.log("user==>", user);

  const navLinks = (
    <>
      {navItems.map(({ id, label }) => (
        <li key={id}>
          <button onClick={() => document.getElementById(id)?.scrollIntoView()}>
            {label}
          </button>
        </li>
      ))}
    </>
  );

  const socialLinks = (
    <div className="flex items-center gap-2">
      <a href="https://github.com/Sazol-Sarker" target="_blank" title="GitHub">
        <FaGithub className="text-xl hover:text-green-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/sazol-sarker-63832818b"
        target="_blank"
        title="LinkedIn"
      >
        <FaLinkedinIn className="text-xl hover:text-green-400" />
      </a>
      <a href="mailto:sazolsarker1@gmail.com" target="_blank" title="Email">
        <MdEmail className="text-xl hover:text-green-400" />
      </a>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleGoogleLogIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        if (result?.user) {
          if (result?.user?.email == "sazolsarker1@gmail.com") {
            setUser(result?.user);
            setLoading(false);
            navigate("/dashboard");
          } else {
            setUser(null);
            Swal.fire({
              title: "No Access!",
              text: "Only admin knows admin.",
              imageUrl:
                "https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg?w=576",
              imageWidth: 300,
              imageHeight: 200,
              imageAlt: "beat intruder",
              timer: 2000,
            });
          }
        }
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  const handleLogout = () => {
    setLoading(true);
    console.log("logging out");
    logoutUser()
      .then(() => {
        console.log("logged out!");
        setUser(null);
        setLoading(false);
        navigate('/')
      })
      .catch((error) => {});
  };

  return (
    <div className="navbar w-full fixed z-20 bg-slate-800 bg-opacity-70 text-white shadow-md px-4">
      {/* Navbar Start (Mobile & Logo) */}
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <IoOptions className="text-2xl" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-black bg-opacity-70 rounded-box w-52 text-white *:hover:text-amber-500"
          >
            {!user && navLinks}
            {/* <li>
              <button onClick={handleGoogleLogIn} className="text-white">
                Admin Login
              </button>
            </li> */}
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="btn bg-slate-600/70 text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGoogleLogIn}
                className="btn bg-slate-600/70 text-white"
              >
                Admin Login
              </button>
            )}
            {!user&&<li>{socialLinks}</li>}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Portfolio
        </Link>
      </div>

      {/* Navbar Center (md only) */}
      <div className="navbar-center hidden md:flex lg:hidden">
        {!user && <ul className="menu menu-horizontal px-1">{navLinks}</ul>}
        {user?.email ? (
          <button
            onClick={handleLogout}
            className="btn bg-slate-600/70 text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-slate-600/70 text-white"
          >
            Admin Login
          </button>
        )}
      </div>

      {/* Navbar End (lg and above) */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {!user && <ul className="menu menu-horizontal px-1">{navLinks}</ul>}
        {!user && socialLinks}

        {user?.email ? (
          <button
            onClick={handleLogout}
            className="btn bg-slate-600/70 text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-slate-600/70 text-white"
          >
            Admin Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
