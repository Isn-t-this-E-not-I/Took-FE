import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Nav_Buttons } from "../../data";
import Header from "../../components/Header"; // 헤더 컴포넌트 추가

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate(); // 경로 이동을 위한 navigate 함수

  // auth 페이지에서는 헤더를 숨기기 위한 조건 설정
  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <Box display="flex" height="100vh">
      {/* 왼쪽 사이드바 */}
      {!isAuthPage && (
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            height: "100vh",
            width: 260,
            overflow: "hidden",
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
                overflow: "hidden",
              }}
            >
              <img
                src={Logo}
                alt="Chat App Logo"
                style={{ height: "80%", objectFit: "cover" }}
              />
            </Box>

            {/* 네비게이션 아이콘 버튼 */}
            <Stack
              sx={{ width: "70%" }}
              direction="column"
              alignItems="flex-start"
              spacing={1}
            >
              {Nav_Buttons.map((el, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 1.5,
                    padding: "10px 10px",
                    width: "100%",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  onClick={() => {
                    setSelected(el.index);
                    navigate(el.path); // 아이콘 클릭 시 경로 이동
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color:
                        selected === el.index
                          ? theme.palette.primary.main
                          : theme.palette.primary.light,
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
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
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
      )}

      {/* 중앙 및 우측 콘텐츠 렌더링 */}
      <Box flexGrow={1}>
        {!isAuthPage && <Header />}{" "}
        {/* auth 페이지가 아닌 경우에만 헤더를 렌더링 */}
        <Outlet /> {/* MainLayout 렌더링 */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
