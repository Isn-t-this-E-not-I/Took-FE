import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard";
import MainLayout from "@/layouts/main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<MainLayout />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
