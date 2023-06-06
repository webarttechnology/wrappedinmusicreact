import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Song from "../pages/Song";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/songs" element={<Song />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
