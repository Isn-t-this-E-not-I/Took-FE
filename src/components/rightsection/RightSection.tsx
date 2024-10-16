import React from "react";
import { Box, Typography } from "@mui/material";

interface RecommendProps {
  title: string; // 추천 친구 섹션의 제목
  width?: string | number; // width를 props로 받을 수 있게 정의
  margin?: string | number; // margin을 props로 받을 수 있게 정의
  children?: React.ReactNode; // 추천 친구 목록을 동적으로 추가할 수 있도록
}

const Recommend: React.FC<RecommendProps> = ({
  title,
  width = "300px", // 기본 width
  margin = "20px", // 기본 margin
  children, // 동적으로 렌더링할 내용
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8faff",
        borderRadius: "12px",
        padding: "20px",
        margin, // 전달된 margin 사용
        width, // 전달된 width 사용
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 제목 영역 */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "#000",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          {title} {/* 동적으로 변경될 title */}
        </Typography>
      </Box>
      {/* 추천 친구 목록 등 동적으로 추가할 내용 */}
      <Box sx={{ padding: "10px 0", flexGrow: 1 }}>
        {children} {/* 자식 컴포넌트 */}
      </Box>
    </Box>
  );
};

export default Recommend;
