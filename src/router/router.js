import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import HomePages from "../Pages/Home/HomePages/HomePages";
import AuthLayOut from "../LayOut/AuthLayOut";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [{ index: true, Component: HomePages }],
  },
  {
    path: "/",
    Component: AuthLayOut,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
