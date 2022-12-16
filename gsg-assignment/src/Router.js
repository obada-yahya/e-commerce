import React from "react";
import HomePage from "./Views/HomePage";
import ProductsFilter from "./Views/ProductsFilter";
import ProductPage from "./Views/ProductPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./Views/NotFound";
import LoginPage from "./Views/LoginPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ProductsFilter />} />
        <Route path="products/:productId" element={<ProductPage />}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
