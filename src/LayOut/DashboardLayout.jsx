import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';

const DashboardLayout = () => {
    return (
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    {/* Navbar */}
    <div className="navbar  lg:hidden bg-base-300 w-full">
      <div className="flex-none  lg:hidden">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
    {/* Page content here */}
    <Outlet/>
  </div>

  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <ProFastLogo/>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li><NavLink to='/sendParcel'>sendParcel</NavLink></li> */}
      <li><NavLink to='/dashboard/myParcels'>My Parcels</NavLink></li>
    </ul>
  </div>
</div>



    );
};

export default DashboardLayout;