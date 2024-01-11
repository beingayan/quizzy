import { Outlet, Navigate } from "react-router-dom";
import TopBar from "../shared/TopBar";
import Loader from "../shared/Loader";
import { useAxiosInstance } from "../lib/axiosInheritance";
import { useSelector } from "react-redux";
// import {LoadingContext} from '../shared/axiosInstance'

const AuthLayout = ({ children }) => {
  
  const {loading:{isLoading},auth:{isLoggedIn}} = useSelector((state) => state);
  const isAuthenticated = window.localStorage.getItem('isLoggedIn')|| false;
 

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/quiz" />
      ) : (
        <>
          <TopBar />
          {isLoading === true ? <Loader /> : children}
          {/* {children}  */}
        </>
      )}
    </>
  );
};

export default AuthLayout;
