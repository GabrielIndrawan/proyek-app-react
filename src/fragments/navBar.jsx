import { Link } from "react-router-dom";
import Logo from "../components/logo";
import Icons from "../components/icons";
const NavBar = () => {
    return (
        <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
            <div>
               <div className="flex justify-center mb-10">
                  <Logo variant="text-white text-sm sm:text-2xl"/>
               </div>
               <Link to="/">
               <div className="flex bg-primary text-white px-4 py-3 rounded-md">
                 <div className="text-white sm:mx-0 mx-auto">
                    <Icons.Overview/>
                 </div>
                 <div className="text-white ms-3 hidden sm:block">Overview</div>
               </div>
               </Link>
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
              <Link to="/login">
               <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Logout/>
                 </div>
                  <div className="text-special-bg2 ms-3 hidden sm:block">Logout</div>  
                </div>
               </Link>
               <div className="border-b my-10 border-b-special-bg"></div>
               <div className="flex justify-between items-center">
                 <div className="sm:mx-0 mx-auto center">
                    <img src="/icons/Image.png"/>
                 </div>
                 <div className="hidden sm:block">
                  <div className="font-bold text-white">
                    Tanzir Rahman
                  </div>
                  <div className="mb-1"/>
                  <div className="text-sm">
                    View profile
                  </div>
                 </div>
                 <div>
                    <Icons.KebabMenu/>
                 </div>
               </div>
            </div>
        </nav>
    )
}

export default NavBar;