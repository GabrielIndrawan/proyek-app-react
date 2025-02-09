import Input from "../components/input"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    const date = new Date().toDateString().slice(4)
    return(
        <header className="border-b-2 p-6 flex items-center justify-between">
            <div className="flex">
              <div className="font-bold text-lg">Hello {localStorage.getItem("username")}</div>
              <div className="ms-6 text-gray-03">{date}</div>
            </div>
            <div className="flex">
              <div className="self-center">
                <NotificationsIcon className="text-gray-01 scale-110"/>
              </div>
              <div className="ms-10 hidden sm:block">
                <Input variant="bg-white w-80" placeholder="Search here"/>
              </div>
            </div>
        </header>
    )
}

export default Header