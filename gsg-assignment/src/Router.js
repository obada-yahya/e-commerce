import React from 'react'
import HomePage from "./Views/HomePage";
import ProductsFilter from "./Views/ProductsFilter";
import ProductPage from "./Views/ProductPage"
import {Route,BrowserRouter,Routes} from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='shop' element={<ProductsFilter/>}/>
            <Route path='product' element={<ProductPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;