/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../fragments/header";
import NavBar from "../fragments/navBar";
import { themeContext } from "../context/themeContext";
import { NotifContext } from "../context/notifContext";
import SimpleBackdrop from "../components/Backdrop";
import CustomizedSnackbars from "../components/SnackBar";

const MainLayout = (props) => {
    const {children} = props
    const {theme} = useContext(themeContext)
    const {msg,setMsg,open,setOpen,isLoading,setIsLoading} = useContext(NotifContext)
    return (
        <div className={`flex bg-special-mainBg min-h-screen w-[1500px] ${theme.name}`}>
          {/* navbar start*/}
          <NavBar/>
          {/* navbar end*/}
          <div className="w-screen">
            {
              isLoading && (
                <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading}/>
              )
            }
            {
              msg && (
                <CustomizedSnackbars
                  severity={msg.severity}
                  message={msg.desc}
                  open={open}
                  setOpen={setOpen}
                />
              )
            }
            {/* header start*/}
            <Header/>
            {/* header end*/}
            {/* content start*/}
            <main className="px-6 py-4">
                {children}
            </main>
            {/* content end*/}
          </div>
        </div>
    );
};
  
export default MainLayout;
