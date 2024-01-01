import { Outlet, Navigate } from "react-router-dom";
import TopBar from "../shared/TopBar";

const AuthLayout = ({children}) => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/homedd" />
      ) : (
        <>
          <TopBar/>
            {children} 
       
          
        </>
      )}
    </>
  );
};

export default AuthLayout;
