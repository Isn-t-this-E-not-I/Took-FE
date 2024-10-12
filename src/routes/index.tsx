import { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth"; // auth 전용 레이아웃 추가
import MainLayout from "../layouts/main"; // MainLayout 추가

// 컴포넌트 로딩 스크린
import LoadingScreen from "../components/LoadingScreen";

// Lazy 로딩 컴포넌트
const Loadable = (Component: ComponentType<any>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />, // auth 전용 레이아웃
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "find-id", element: <FindIdPage /> },
        { path: "find-password", element: <FindPasswordPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />, // DashboardLayout 사용
      children: [
        {
          path: "/",
          element: <MainLayout />, // MainLayout을 DashboardLayout 내부에 렌더링
          children: [
            { path: "main", element: <MainPage /> },
            { path: "create", element: <CreatePostPage /> },
            { path: "chat", element: <ChatPage /> },
            { path: "explore", element: <FullPostPage /> },
            { path: "community", element: <CommunityPage /> },
          ],
        },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// 페이지 컴포넌트 로드 설정 (Lazy loading)
const MainPage = Loadable(lazy(() => import("../pages/MainPage")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const LoginPage = Loadable(lazy(() => import("../pages/auth/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/RegisterPage")));
const FindIdPage = Loadable(lazy(() => import("../pages/auth/FindIdPage")));
const FindPasswordPage = Loadable(
  lazy(() => import("../pages/auth/FindPasswordPage"))
);
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPasswordPage"))
);
const ChatPage = Loadable(lazy(() => import("../pages/chat/ChatPage")));
const CreatePostPage = Loadable(
  lazy(() => import("../pages/create/CreatePost"))
);
const FullPostPage = Loadable(lazy(() => import("../pages/posts/FullPost")));
const CommunityPage = Loadable(
  lazy(() => import("../pages/community/CommunityPage"))
);
