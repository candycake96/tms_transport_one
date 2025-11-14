import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/first/home/Home";
import Layout from "../src/layout/Layout"; 
import About from "./pages/first/about/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
