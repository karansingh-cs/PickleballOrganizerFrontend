import React from "react";
import Home from "../components/Home";
import Tournaments from "../components/Tournaments";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <h>THE ROUTES GO HERE!</h>
      <Routes>
        <Route path="../components/Home" element={<Home />} />
        <Route path="../components/tournaments" element={<Tournaments />} />
      </Routes>
    </Router>
  );
}
