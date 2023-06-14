import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Song from "../pages/Song";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Category from "../pages/Category";
import AudioTrack from "../components/AudioTrack";
import WrapInMusic from "../pages/WrapInMusic";
import Testimonialss from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Login from "../pages/SignUp";
import SignUp from "../pages/SignUp";
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
              <Route path="/category" element={<Category />} />
              <Route path="/wrapin-music" element={<WrapInMusic />} />
              <Route path="/testimonials" element={<Testimonialss />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        <Footer isOpen={isOpen} />
        <AudioTrack />
      </Router>
    </>
  );
};

export default AppRouter;
