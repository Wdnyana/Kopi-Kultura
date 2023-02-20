import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";

import HomePages from "./pages/HomePages";
import MenuPages from "./pages/MenuPages";
import FasilitasPages from "./pages/FasilitasPages";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePages />} />
      <Route path="/semua-menu" element={<MenuPages />} />
      <Route path="/fasilitas" element={<FasilitasPages />} />
      <Route path="/tentang-kami" element={<AboutPages />} />
      <Route path="/kontak-kami" element={<ContactPages />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
