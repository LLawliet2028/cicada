import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
import PuzzleJourney from "./Pages/PuzzleJourney";
import Puzzle1 from "./Pages/Puzzle1";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/puzzle-journey" element={<PuzzleJourney />} />
        <Route path="/puzzle/1" element={<Puzzle1 />} />
      </Routes>
    </div>
  );
}

export default App;