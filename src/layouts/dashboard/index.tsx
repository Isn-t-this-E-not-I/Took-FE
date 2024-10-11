import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0); // 선택된 버튼의 상태

  return (
    <Box display="flex" height="100vh">
      {/* 왼쪽 사이드바 */}
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          // boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 260,
          overflow: "hidden", // 넘침 방지
          paddingTop: "30px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{ width: "100%" }}
          spacing={3}
        >
          {/* 로고 */}
          <Box
            sx={{
              height: 50,
              width: 50,
              borderRadius: 1.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden", // 이미지가 박스를 넘지 않도록 설정
            }}
          >
            <img
              src={Logo}
              alt="Chat App Logo"
              style={{ height: "80%", objectFit: "cover" }} // 이미지 크기 맞춤
            />
          </Box>

          {/* 네비게이션 아이콘 버튼 */}
          <Stack
            sx={{ width: "70%" }} // 아이콘과 텍스트가 포함된 영역을 채움
            direction="column"
            alignItems="flex-start"
            spacing={1} // 아이콘 사이 여백 축소
          >
            {Nav_Buttons.map((el, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1.5,
                  padding: "10px 10px", // 패딩 축소
                  width: "100%",
                  cursor: "pointer", // 클릭 가능하게 변경
                  whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
                  textOverflow: "ellipsis", // 긴 텍스트 생략 처리
                }}
                onClick={() => setSelected(el.index)} // 버튼 클릭 시 상태 변경
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      selected === el.index
                        ? theme.palette.primary.main // 클릭된 상태에서는 primary 색상 적용
                        : theme.palette.primary.light, // 클릭되지 않은 상태에서는 light 색상 적용
                    padding: 0,
                    marginRight: 3,
                  }}
                >
                  {el.icon}
                </IconButton>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    color:
                      selected === el.index
                        ? theme.palette.text.secondary // 클릭된 상태에서는 secondary 텍스트 색상 적용
                        : theme.palette.text.primary, // 클릭되지 않은 상태에서는 primary 텍스트 색상 적용
                  }}
                >
                  {el.title}
                </Typography>
              </Box>
            ))}
            <Divider />
          </Stack>
        </Stack>
      </Box>

      {/* 중앙 및 우측 콘텐츠 렌더링 */}
      <Box flexGrow={1}>
        <Outlet /> {/* 페이지 콘텐츠 */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
