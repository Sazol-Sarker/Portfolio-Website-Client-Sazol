import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1e1e2f]">

    <RouterProvider router={router} />
    
    </div>
  </StrictMode>
);
