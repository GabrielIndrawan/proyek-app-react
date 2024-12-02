/* eslint-disable react/prop-types */
import Header from "../fragments/header";
import NavBar from "../fragments/navBar";

const MainLayout = (props) => {
    const {children} = props
    return (
        <div className="flex bg-special-mainBg w-auto min-h-screen w-[1520px]">
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
