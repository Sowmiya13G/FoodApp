import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Checkout from "../pages/checkOut";
import Pizzas from "../pages/pizzas";
import PizzaDetails from "../pages/pizzaDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;
