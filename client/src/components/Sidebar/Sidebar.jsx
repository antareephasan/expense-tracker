import React from "react";
import UserImg from "../../assets/demoUser.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/provider/authProvider";
import { useUser } from "@/hooks/useUser";

const Sidebar = () => {
  const { logout } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-shrink-0 flex-col items-center justify-between gap-20 w-[250px] px-5 py-8 h-screen sticky top-0 bg-zinc-800">
      {/* User */}
      <div className="flex flex-col gap-3 items-center">
        <img
          src={`http://localhost:5000/${user?.image_url}` || UserImg}
          className="max-w-[120px] object-cover aspect-square  rounded-xl"
          alt="user-image"
        />
        <p className="text-white">Hello, {user?.name.split(" ")[0]}</p>
      </div>

      {/* Navigation Pages */}
      <div className="flex flex-col gap-5 text-gray-400">
        <Link to="/">Dashboard</Link>
        <Link to="/transaction">Transaction</Link>
        <Link to="/settings">Settings</Link>
      </div>

      {/* Log in-out Button */}
      <Button
        onClick={() => logout(() => navigate("/login"))}
        className="py-1 px-4 bg-slate-200 rounded-full text-black hover:text-white"
      >
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
