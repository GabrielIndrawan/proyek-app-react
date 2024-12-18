/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../fragments/header";
import NavBar from "../fragments/navBar";
import { themeContext } from "../context/themeContext";

const MainLayout = (props) => {
    const {children} = props
    const {theme} = useContext(themeContext)
    return (
        <div className={`flex bg-special-mainBg min-h-screen w-[1500px] ${theme.name}`}>
          {/* navbar start*/}
          <NavBar/>
          {/* navbar end*/}
          <div className="w-screen">
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
