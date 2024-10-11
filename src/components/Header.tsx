import React, { useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6"; // 필요한 아이콘
import { FaBell } from "react-icons/fa"; // 필요한 아이콘
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* Settings 아이콘 */}
      <span
        onClick={() => setOpenSettings(true)}
        style={{ cursor: "pointer", margin: "0 10px" }}
      >
        <FaGear />
      </span>
      {/* Notifications 아이콘 */}
      <span
        onClick={() => setOpenNotifications(true)}
        style={{ cursor: "pointer", margin: "0 10px" }}
      >
        <FaBell />
      </span>
      {/* User 정보 아이콘 */}
      <span
        onClick={() => navigate("/mypage")}
        style={{ cursor: "pointer", margin: "0 10px" }}
      >
        <FaUser />
      </span>
    </div>
  );
};

export default Header;
