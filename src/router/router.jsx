import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import HomePages from "../Pages/Home/HomePages/HomePages";
import AuthLayOut from "../LayOut/AuthLayOut";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
// import PasswordReset from "../Pages/Authentication/PasswordReset/PasswordReset";
import Coverage from "../Pages/Coverage/Coverage";
import SendParcel from "../Pages/SendParcel/SendParcel";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import DashboardLayout from "../LayOut/DashboardLayout";
import MyParCels from "../Pages/DashBoard/MyParCels/MyParCels";
import Payment from "../Pages/DashBoard/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: HomePages,
      },
      {
        path: "coverage",
        Component: Coverage,
      },
      // {
      //   path: "sendParcel",
      //   element: (
      //     <PrivateRoute>
      //       <SendParcel />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "sendParcel",
        loader:() => fetch('./public/serviceCenter.json'),
        // Component: SendParcel,
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
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
      {
        path: "PasswordReset",
        Component: PasswordReset,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute>
      <DashboardLayout/>
    </PrivateRoute>,
    children:[
      {
        path:'myParcels',
        Component:MyParCels
      },
      {
        path:'payment/:id',
        Component:Payment
      }
    ]
  }
]);
