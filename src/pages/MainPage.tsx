import React from "react";
import BannerContainer from "@/components/container/BannerContainer";
import MainContainer from "@/components/container/MainContainer";
import Recommend from "../components/rightsection/RightSection";
import MainLayout from "@/layouts/main";

const MainPage: React.FC = () => {
  return (
    <MainLayout
      rightComponent={
        <div>
          <Recommend title="추천친구" />
          <Recommend title="추천친구" />
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
