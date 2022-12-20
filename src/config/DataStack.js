import PeopleIcon from "@mui/icons-material/People";
import Home from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Edit from "@mui/icons-material/Edit";

export const pages = [
  { id: 1, name: "Home", link: "/", icon: <Home /> },
  { id: 2, name: "Dashboard", link: "/dashboard", icon: <DashboardIcon /> },
  { id: 3, name: "Products", link: "/my-Products", icon: <LocalMallIcon /> },
  { id: 4, name: "Users", link: "/users", icon: <PeopleIcon /> },
  { id: 5, name: "Blog", link: "/blog", icon: <Edit /> },
  { id: 6, name: "Setting", link: "/setting", icon: <SettingsIcon /> },
  { id: 7, name: "Login", link: "/login", icon: <LoginIcon /> },
  { id: 8, name: "Register", link: "/register", icon: <PersonAddAltIcon /> },
];
