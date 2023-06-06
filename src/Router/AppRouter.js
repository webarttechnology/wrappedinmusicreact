import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Song from "../pages/Song";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <div className="ms_main_wrapper">
          <Sidebar isOpen={isOpen} sidebarOpen={sidebarOpen} />
          <div
            class={
              isOpen
                ? "ms_content_wrapper padder_top80 ms_cont_left_marg"
                : "ms_content_wrapper padder_top80"
            }
          >
            <Header isOpen={isOpen} />
            <Routes>
              <Route path="/" element={<Base />} />
              <Route path="/songs" element={<Song />} />
            </Routes>
          </div>
        </div>
        <Footer isOpen={isOpen} />
      </Router>
    </>
  );
};

export default AppRouter;
