import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useContext, useEffect } from "react";
import AuthContext from "../Providers/AuthProvider/AuthContext";

const Main = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <NavBar></NavBar>
      </header>
      <main className="w-9/12 mx-auto flex-grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
