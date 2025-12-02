// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/first/home/Home";
import Layout from "../src/layout/Layout";
import About from "./pages/first/about/About";
import Proposal_price_main from "./pages/proposal_price/Proposal_price_main";
// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from "./pages/first/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pages" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="about" element={<About />} />  
          <Route path="proposal_price_main" element={<Proposal_price_main />} /> 
        </Route>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
