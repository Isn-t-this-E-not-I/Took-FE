import { Suspense, lazy, ComponentType } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// 컴포넌트 로딩 스크린
import LoadingScreen from "../components/LoadingScreen";

// Loadable 함수의 타입을 명시
const Loadable = (Component: ComponentType<any>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Router 컴포넌트
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />, // 기본 레이아웃 설정
      children: [
        // 기본 경로
        { element: <Navigate to="/main" replace />, index: true },
        { path: "main", element: <MainPage /> }, // 메인 페이지

        // 404 페이지 및 잘못된 경로 처리
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> }, // 다른 모든 경로를 404로 리디렉션
  ]);
}

// 페이지 컴포넌트 로드 설정 (Lazy loading)
const MainPage = Loadable(lazy(() => import("../pages/MainPage")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
