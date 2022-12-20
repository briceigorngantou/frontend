import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContext from "./config/AppContext";
import Blog from "./screen/blog/Blog";
import Clients from "./screen/clients/Clients";
import Company from "./screen/company/Company";
import Dashboard from "./screen/dashboard/Dashboard";
import Home from "./screen/home/Home";
import Login from "./screen/login/Login";
import Logout from "./screen/logout/Logout";
import Products from "./screen/products/Products";
import Navbar from "./components/navbar/Navbar";
import Register from "./screen/register/Register";
import Setting from "./screen/settings/Setting";
import Sidebar from "./components/sidebar/Sidebar";
import Shop from "./screen/shop/Shop";
import SingleProduct from "./screen/singleProduct/SingleProduct";
import "./app.css";

function App() {
  // id du Products selectionner
  const [ActualData_id, setActualData_id] = useState(null);
  const [ActualData_category, setActualData_category] = useState(null);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          ActualData_id,
          setActualData_id,
          ActualData_category,
          setActualData_category,
        }}
      >
        <div className="app-bars">
          <div className="app-sidebar">
            <Sidebar />
          </div>
          <div className="app-body">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<SingleProduct />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/company" element={<Company />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/my-Products" element={<Products />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/users" element={<Clients />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
