import { Outlet } from "react-router-dom";
import NavBar from "./../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
