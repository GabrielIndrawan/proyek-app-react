/* eslint-disable react/prop-types */

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/forgetPassword";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const {isLoggedIn} = useContext(AuthContext)

  const RequireAuth = (props) => {
    const {children} = props
    return isLoggedIn? children : <Navigate to={"/login"}/>
  }

  const routers = createBrowserRouter([
    {
      path:"/",
      element: <RequireAuth><DashboardPage/></RequireAuth>,
    },
    {
      path:"/login",
      element: <SignIn/>
    },
    {
      path:"/register",
      element: <SignUp/>
    },
    {
      path:"/forgot-password",
      element: <ForgetPassword/>
    },
    {
      path:"/balance",
      element: <RequireAuth><BalancePage/></RequireAuth>
    },
    {
      path:"/expenses",
      element: <RequireAuth><ExpensesPage/></RequireAuth>
    }
  ])

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
};

export default App;