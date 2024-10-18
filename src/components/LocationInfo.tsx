import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FaMapLocationDot } from "react-icons/fa6"; // 위치 아이콘
import axios from "axios";

const LocationInfo = () => {
  const [location, setLocation] = useState({ city: "", country: "" });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Nominatim 는 높은 트래픽에서 권장 하지 않음
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
          );

          const { suburb, city, country } = response.data.address;

          setLocation({
            city: suburb || city || "Unknown City",
            country: country || "Unknown Country",
          });
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        marginLeft: "20px",
      }}
    >
      {/* 아이콘을 크게 설정 */}
      <FaMapLocationDot
        style={{ color: "#0095FF", marginRight: "18px", fontSize: "2.7rem" }}
      />

      {/* 텍스트 두 줄로 나누어 표시 */}
      <Box>
        {/* 첫 번째 줄 - You are now in */}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
        >
          You are now in
        </Typography>

        {/* 두 번째 줄 - [도시], [나라] */}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#000000" }}
        >
          {location.city} {location.country}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationInfo;
