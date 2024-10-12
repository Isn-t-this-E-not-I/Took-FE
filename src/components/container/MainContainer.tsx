import React, { ReactNode } from "react";
import { Box } from "@mui/material";

// 컨테이너 컴포넌트 정의
type ContainerProps = {
  children: ReactNode; // children의 타입을 ReactNode로 명시
  padding?: string;
  margin?: string;
  maxWidth?: string;
  backgroundColor?: string;
};

const Container: React.FC<ContainerProps> = ({
  children,
  padding = "20px",
  margin = "0",
  maxWidth = "1200px",
  backgroundColor = "#f4f4f4",
}) => {
  return (
    <Box
      sx={{
        padding,
        margin,
        maxWidth,
        backgroundColor,
        width: "100%",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // 예시로 쉐도우 추가
        borderRadius: "10px", // 모서리 둥글게
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
