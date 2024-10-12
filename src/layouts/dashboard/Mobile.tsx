import React, { useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav_Buttons } from "@/data";
import MobileHeader from "@/components/header/\bMobileHeader";

const MobileDashboardLayout = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  // Nav 버튼을 클릭하면 해당 경로로 이동
  const handleNavigation = (index: number, path: string) => {
    setValue(index);
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* 상단 헤더 */}
      <MobileHeader />

      {/* 중앙 콘텐츠 (페이지들) */}
      <Box sx={{ flexGrow: 1, overflow: "auto", padding: 2 }}>
        <Outlet /> {/* 각 페이지 컴포넌트가 렌더링될 부분 */}
      </Box>

      {/* 하단 네비게이션 바 */}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) =>
            handleNavigation(newValue, Nav_Buttons[newValue].path)
          }
        >
          {Nav_Buttons.map((el, index) => (
            <BottomNavigationAction key={index} icon={el.icon} />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MobileDashboardLayout;
