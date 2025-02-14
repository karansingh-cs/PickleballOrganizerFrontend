import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pickleball_Vite/pickleball-frontend/pages/Home";
import Tournaments from "../Pickleball_Vite/pickleball-frontend/pages/Tournaments";
import Navbar from "/components/Navbar";
import CreateTournament from '/pages/CreateTournament';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
      </Routes>
    </Router>
  );
}

export default App;
