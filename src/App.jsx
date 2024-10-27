
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/forgetPassword";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const App = () => {
  const routers = createBrowserRouter([
    {
      path:"/",
      element: <div>Halaman Utama</div>
    },
    {
      path:"/login",
      element: <SignIn/>
    },
    {
      path:"/register",
      element: <SignUp/>
    }
  ])

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
};

export default App;