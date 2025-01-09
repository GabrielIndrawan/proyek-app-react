import { Link } from "react-router-dom";
import Logo from "../components/logo";
import Icons from "../components/icons";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { AuthContext } from "../context/authContext";
import { NotifContext } from "../context/notifContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];
  
  const {theme, setTheme} = useContext(themeContext)
  const {name, setIsLoggedIn, setName} = useContext(AuthContext)
  const {setMsg, setOpen, setIsLoading} = useContext(NotifContext)

  const refreshToken = localStorage.getItem("refreshToken");

const Logout = async () => {
    try {
      setIsLoading(true)
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

     
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }

    setIsLoggedIn(false);
    setName("");
    localStorage.removeItem("refreshToken");
    setIsLoading(false)
    navigate("/login");
  };

    return (
        <nav className={`bg-defaultBlack text-special-bg2 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between`}>
            <div>
               <div className="flex justify-center mb-10">
                  <Logo variant="text-primary text-sm sm:text-2xl"/>
               </div>
               <Link to="/">
               <div className="flex bg-primary text-white px-4 py-3 rounded-md zoom-in">
                 <div className="text-white sm:mx-0 mx-auto">
                    <Icons.Overview/>
                 </div>
                 <div className="text-white ms-3 hidden sm:block">Overview</div>
               </div>
               </Link>
               <Link to="/balance">
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                  <div className="sm:mx-0 mx-auto">
                    <Icons.Balances/>
                  </div>
                  <div className="text-special-bg2 ms-3 hidden sm:block">Balances</div>
                </div>
               </Link>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Transactions/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Transactions</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Bills/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Bills</div>
               </div>
               <Link to="/expenses">
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                  <div className="sm:mx-0 mx-auto">
                     <Icons.Expenses/>
                  </div>
                  <div className="text-special-bg2 ms-3 hidden sm:block">Expenses</div>
                </div>
               </Link>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Goal/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Goal</div>
               </div>
               <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                 <div className="sm:mx-0 mx-auto">
                    <Icons.Settings/>
                 </div>
                 <div className="text-special-bg2 ms-3 hidden sm:block">Settings</div>
               </div>
             </div>
             <div className="mb-[100px]"/>
             <div className="md:flex md:gap-2">
                Themes
                {themes.map((t) => (
                  <div
                    key={t.name}
                    className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2 zoom-in`}
                    onClick={() => setTheme(t)}
                  ></div>
                ))}
              </div>
             <div>
              <div onClick={Logout}>
               <div className="flex bg-special-bg3 px-4 py-3 rounded-md zoom-in">
                 <div className="sm:mx-0 mx-auto text-primary">
                    <Icons.Logout/>
                 </div>
                  <div className="text-special-bg2 ms-3 hidden sm:block">Logout</div>  
                </div>
               </div>
               <div className="border-b my-10 border-b-special-bg"></div>
               <div className="flex justify-between items-center">
                 <div className="sm:mx-0 mx-auto center">
                    <img src="/icons/Image.png"/>
                 </div>
                 <div className="hidden sm:block">
                  <div className="font-bold text-white">
                    {localStorage.getItem("username")}
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