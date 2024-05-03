import { Navigate, Outlet } from "react-router-dom";
import { isloggedIn } from "../App";
import { cloneElement } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const DashboardLayout = ({ children }) => {
  return <div className="dashboard-container">

    <div > 
            <NavBar/>
    </div>
    <div className="sidebar-content">
    <div>
       <SideBar/>
       </div>
        <div>
            {cloneElement(children)}
        </div>
   
    </div>
   
  </div>;
};

const DashboardLayoutRoute = () => {
  return isloggedIn ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default DashboardLayoutRoute;
