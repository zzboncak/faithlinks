import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-full">
        <Header />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<Foods />} path="/Foods" />
        <Route element={<FilteredFoods />} path="/filteredfoods/:slug" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
