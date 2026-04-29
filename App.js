import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import LiveMap from "./LiveMap";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/map">Live Map</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/map" element={<LiveMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;