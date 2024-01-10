import { Navigate } from "react-router-dom";
import { setUserDetailInLocalStorage } from "../../../helper/authHelper";
import { setCredentials } from "../../utils";

export const signupSuccess = (data,dispatch) => {
    // const navigate = Navigate()
    setCredentials(data);
    setUserDetailInLocalStorage(data);
    dispatch()
   return( <Navigate to="/dashboard" replace={true} />)

}