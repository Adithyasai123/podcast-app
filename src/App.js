import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "../src/Components/Topbar/Topbar";
import Albums from "../src/Components/Albums/Albums";
import Artists from "../src/Components/Artists/Artists";
import Create from "../src/Components/create/create";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home";
import Discover from "../src/Pages/Discover";
import Trending from "../src/Pages/Trending";
import Resources from "../src/Pages/Resources";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Error from "../src/Pages/error"

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
       
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Topbar />
              <Albums />
              <Artists />
              <Create />
            </div>
          }
        />
        <Route path="Discover" element={<Discover />} />
        <Route path="/trending" element={<Artists />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={Error} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
