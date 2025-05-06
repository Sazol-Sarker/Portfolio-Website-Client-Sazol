import { Outlet } from "react-router-dom";
import NavBar from "./../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className=" ">
      {/* <header> */}
        <NavBar></NavBar>
      {/* </header> */}
      <main className="w-9/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
