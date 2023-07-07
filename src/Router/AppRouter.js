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
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyAccount from "../pages/MyAccount";
import ForgotPassword from "../pages/ForgotPassword";
import CategoryDetails from "../pages/CategoryDetails";
import VoiceMess from "../pages/VoiceMess";
import MessagePlacePage from "../pages/MessagePlacePage";
const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(
    JSON.stringify(localStorage.getItem("isLogin"))
  );
  const [isOpen, setIsOpen] = useState(false);
  console.log("isLogin", isLogin);
  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <div className="ms_main_wrapper">
          <Sidebar
            isOpen={isOpen}
            sidebarOpen={sidebarOpen}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          />
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
              <Route path="/songs" element={<Song setIsLogin={setIsLogin} />} />
              <Route
                path="/category"
                element={<Category setIsLogin={setIsLogin} />}
              />
              <Route path="/wrapin-music" element={<WrapInMusic />} />
              <Route path="/testimonials" element={<Testimonialss />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/category-details" element={<CategoryDetails />} />
              <Route path="/message-placement" element={<MessagePlacePage />} />
              <Route path="/voice-message" element={<VoiceMess />} />
              <Route
                path="/signup"
                element={<SignUp setIsLogin={setIsLogin} />}
              />
              <Route
                path="/my-account"
                element={<MyAccount setIsLogin={setIsLogin} />}
              />
              <Route
                path="/login"
                element={<Login setIsLogin={setIsLogin} />}
              />
              <Route
                path="/forgot-password"
                element={<ForgotPassword setIsLogin={setIsLogin} />}
              />
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
