import { Outlet, Navigate } from "react-router-dom";
import TopBar from "../shared/TopBar";
import Loader from "../shared/Loader";
import { useAxiosInstance } from "../lib/axiosInheritance";
import { useSelector } from "react-redux";
// import {LoadingContext} from '../shared/axiosInstance'

const AuthLayout = ({ children }) => {
  const isAuthenticated = false;

  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/home" />
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
