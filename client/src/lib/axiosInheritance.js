// axiosInstance.js

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import * as Action from '../redux/loading_reducer'
import BasicAlerts from '../shared/ErrorAlert';
import { toast } from 'react-toastify';
// import { showLoader, hideLoader } from './loaderFunctions'; // Functions to show/hide loader

const instance = axios.create({
  baseURL: 'http://localhost:8080/', // Your API base URL add env
  timeout: 10000, // Timeout configuration if needed
});

var loadingState = false;

// Add a request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     // Show loader when a request is initiated
//     // showLoader(); // Implement this function to display the loader
//     loadingState = true;

//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Hide loader when a response is received
//     // hideLoader(); // Implement this function to hide the loader
   
//     loadingState = false;
//     return response;
//   },
//   function (error) {
//     // Hide loader on error response as well
//     // hideLoader(); // Implement this function to hide the loader
//     loadingState = false;

//     return Promise.reject(error);
//   }
// );

export default instance;


const AxiosInterceptor = ({ children }) => {
    const dispatch = useDispatch(); 
  
    useEffect(() => {
        instance.interceptors.request.use(
            function (config) {
              // Show loader when a request is initiated
              // showLoader(); // Implement this function to display the loader
              loadingState = true;
              dispatch(Action.setLoading())
          
              return config;
            },
            function (error) {
             
              // Do something with request error
              return Promise.reject(error);
            }
          );
          
          // Add a response interceptor
          instance.interceptors.response.use(
            function (response) {
              // Hide loader when a response is received
              // hideLoader(); // Implement this function to hide the loader
             
              loadingState = false;
              dispatch(Action.removeLoading())
              return response;
            },
            function (error) {
             
              toast(error.response.data.msg, {
                style: {
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  backgroundColor: "rgb(253, 237, 237)",
                  color: "rgb(95, 33, 32)",
                  borderRadius: "8px",
                  // Add other styles as needed
                },
                hideProgressBar:true
              });
              
              // Hide loader on error response as well
              // hideLoader(); // Implement this function to hide the loader
              loadingState = false;
              dispatch(Action.removeLoading())
              return Promise.reject(error);
            }
          );
  
    
  
      return () => instance.interceptors.response.eject(instance);
    }, []);
  
    return children;
  };


  export { AxiosInterceptor };