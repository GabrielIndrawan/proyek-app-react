import { Link } from "react-router-dom";
import Logo from "../components/logo";
import Icons from "../components/icons";
const NavBar = () => {
    return (
        <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
            <div>
               <div className="flex justify-center mb-10">
                  <Logo/>
               </div>
               <div className="flex bg-primary text-white px-4 py-3 rounded-md">
                 <div className="text-white sm:mx-0 mx-auto">
                    <Icons.Overview/>
                 </div>
                 <div className="text-white ms-3 hidden sm:block">Overview</div>
               </div>
               <Link to="/balance">
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                  <div className="sm:mx-0 mx-auto">
                    <Icons.Balances/>
                  </div>
                  <div className="text-special-bg2 ms-3 hidden sm:block">Balances</div>
                </div>
               </Link>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Transactions/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Transactions</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Bills/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Bills</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Expenses/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Expenses</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Goal/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Goal</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Settings/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Settings</div>
               </div>
             </div>
             <div className="mb-[100px]"/>
             <div>
               <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Logout/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Logout</div>
               </div>
               <div className="border-b my-10 border-b-special-bg"></div>
               <div className="flex justify-between">
                 <div className="sm:mx-0 mx-auto">foto</div>
                 <div className="hidden sm:block">
                   Username
                   <br />
                   View Profile
                 </div>
                 <div className="hidden sm:block">icon</div>
               </div>
            </div>
        </nav>
    )
}

export default NavBar;