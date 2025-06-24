import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from "aos";
import AuthProvider from "./Context/AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";


Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist max-w-7xl mx-auto">
     <AuthProvider>
       <RouterProvider router={router} />
       <ToastContainer/>
     </AuthProvider>
    </div>
  </StrictMode>
);
