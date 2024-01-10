import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import AuthLayout from '../_auth/AuthLayout';
import SignUp from '../_auth/SignUp'
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <AuthLayout><SignUp/></AuthLayout>,
    
  },
  {
    path : '/quiz',
    element :
    //  <CheckUserExist>
      <Quiz />
      // {/* </CheckUserExist> */}
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
