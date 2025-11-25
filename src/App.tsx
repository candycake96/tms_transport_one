import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/first/home/Home";
import Layout from "../src/layout/Layout"; 
import About from "./pages/first/about/About";

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import Proposal_price_main from "./pages/proposal_price/proposal_price_main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Proposal_price_main" element={<Proposal_price_main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
