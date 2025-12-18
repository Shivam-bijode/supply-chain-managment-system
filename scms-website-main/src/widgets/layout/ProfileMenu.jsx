// src/widgets/layout/ProfileMenu.jsx
import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext"; // adjust path if alias not set
// if alias @ not configured use: ../../context/AuthContext

export function ProfileMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/sign-in");
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Avatar
          src={user?.avatar || "https://i.pravatar.cc/150?img=3"}
          alt={user?.name || "User"}
          className="cursor-pointer"
        />
      </MenuHandler>
      <MenuList>
        <MenuItem disabled>
          <div className="text-sm">Logged in as</div>
          <div className="font-medium">{user?.name || "Guest"}</div>
        </MenuItem>
        <MenuItem onClick={() => navigate("/dashboard/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
        <MenuItem onClick={handleLogout} className="text-red-600">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;