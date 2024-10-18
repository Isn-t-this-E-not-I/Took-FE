import React from "react";
import BannerContainer from "@/components/container/BannerContainer";
import MainContainer from "@/components/container/MainContainer";
import Recommend from "../components/rightsection/RightSection";
import RecommendFriends from "../components/rightsection/main/RecommendFriends";
import MainLayout from "@/layouts/main";

const MainPage: React.FC = () => {
  return (
    <MainLayout
      rightComponent={
        <div>
          <Recommend title="추천친구" children={<RecommendFriends />} />
          <Recommend title="팔로잉 목록" />
        </div>
      }
    >
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <BannerContainer title="Featured most" />
        <MainContainer title="Current Location" />
      </div>
    </MainLayout>
  );
};

export default MainPage;
