import React from "react";
import BannerContainer from "@/components/container/BannerContainer";
import MainContainer from "@/components/container/MainContainer";

const MainPage: React.FC = () => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <BannerContainer title="Featured most" />

      <MainContainer title="Current Location" />
      <p>main page</p>
    </div>
  );
};

export default MainPage;
