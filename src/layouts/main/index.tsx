import React from "react";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* 상단 헤더 */}
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          height: "90px",
          width: "100%",
          margin: 0,
          padding: 0,
          borderBottom: "2px solid #ccc", // 헤더-하단 경계선
        }}
      ></div>

      {/* 중앙과 우측 레이아웃 */}
      <div style={{ display: "flex", flexGrow: 1, margin: 0, padding: 0 }}>
        {/* 중앙 부분 */}
        <div
          style={{
            flexGrow: 2,
            padding: "20px",
            backgroundColor: theme.palette.background.default,
            margin: 0,
            borderRight: "2px solid #ccc", // 중앙-우측 경계선
          }}
        >
          <Outlet context="center" /> {/* 중앙 부분 */}
        </div>

        {/* 우측 부분 */}
        <div
          style={{
            width: "400px",
            padding: "20px",
            backgroundColor: theme.palette.background.default,
            margin: 0,
            borderLeft: "2px solid #ccc", // 중앙-우측 경계선
          }}
        >
          <Outlet context="right" /> {/* 우측 부분 */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
