import React from "react";
import About from "./pages/About/About";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Developer from "./pages/Developer/Developer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Developer" element={<Developer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
