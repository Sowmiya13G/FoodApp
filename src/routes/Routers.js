import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
