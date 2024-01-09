import { fetchPost } from "./customfetchFunction";
import { GEN_AUTH_TOKEN } from "../types";
import { setCredentials, setUserDetailInLocalStorage } from "../../lib/utils";
import axios from "axios";

export const sendUserCredential = (data) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        data,
      }).then((data)=>{
        console.log("data-->",data)
        setCredentials(data.data.token);
        setUserDetailInLocalStorage(data.data.payload,data.data.token)

      }).catch((err)=>{


      });
   
      // Access the response data

      // Assuming `setCredentials` is a function to handle token or credentials storage,
      // make sure to call it with the necessary data from the response
      // setCredentials(response.data);

      

      // Dispatch an action if needed, passing data from the response
      // dispatch({ type: 'STORE_USER_DATA', payload: response.data });
    //   return response;
    } catch (err) {
      console.error("Error:", err);
      // Handle errors or dispatch an error action
      // dispatch({ type: 'API_ERROR', payload: err.message });
    }
  };
};
