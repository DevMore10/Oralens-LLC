import { LayoutDashboardIcon, SettingsIcon, UserPenIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#B9E5E8] p-6 h-screen gap-5 rounded-r-2xl shadow-lg border-[#4A628A] border-r-4 border-t-1">
      <Link
        to="/"
        className="flex items-center gap-3 px-4 py-2 text-[#4A628A] hover:bg-[#7AB2D3] rounded-lg transition-colors group">
        <LayoutDashboardIcon className="text-[#4A628A]" />
        <span className="font-medium">Dashboard</span>
      </Link>

      <Link
        to="/profile"
        className="flex items-center gap-3 px-4 py-2 text-[#4A628A] hover:bg-[#7AB2D3] rounded-lg transition-colors group">
        <UserPenIcon className="text-[#4A628A]" />
        <span className="font-medium">Profile</span>
      </Link>

      <Link
        to="/settings"
        className="flex items-center gap-3 px-4 py-2 text-[#4A628A] hover:bg-[#7AB2D3] rounded-lg transition-colors group">
        <SettingsIcon className="text-[#4A628A]" />
        <span className="font-medium">Settings</span>
      </Link>
    </div>
  );
};

export default Sidebar;
