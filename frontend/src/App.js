import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;