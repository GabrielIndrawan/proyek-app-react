
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/forgetPassword";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";

const App = () => {
  const routers = createBrowserRouter([
    {
      path:"/",
      element: <DashboardPage/>,
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
      element: <BalancePage/>
    }
  ])

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
};

export default App;