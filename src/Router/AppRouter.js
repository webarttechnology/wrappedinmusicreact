import React, { useEffect, useState } from "react";
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
import MusicDetails from "../pages/MusicDetails";
import ThankYou from "../pages/ThankYou";
import { tracks } from "../commonData/staticData";
import * as API from "../api/index";
const AppRouter = () => {
  const [trackData, setTrackData] = useState([]);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  const app_musicData = (song, status) => {
    setTrackData(song);
  };

  const all_musicData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_song_list(header);
      console.log("allMusic", response);
      setTrackData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    all_musicData();
  }, []);

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
            {isLogin ? (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/songs"
                    element={<Song setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/category"
                    element={<Category setIsLogin={setIsLogin} />}
                  />
                  <Route path="/wrapin-music" element={<WrapInMusic />} />
                  <Route path="/testimonials" element={<Testimonialss />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route
                    path="/category-details"
                    element={<CategoryDetails app_musicData={app_musicData} />}
                  />
                  <Route
                    path="/message-placement"
                    element={<MessagePlacePage />}
                  />
                  <Route path="/order-details" element={<MusicDetails />} />
                  <Route path="/voice-message" element={<VoiceMess />} />
                  <Route
                    path="/thankyou"
                    element={<ThankYou setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/my-account"
                    element={<MyAccount setIsLogin={setIsLogin} />}
                  />
                </Routes>
              </>
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/signup"
                    element={<SignUp setIsLogin={setIsLogin} />}
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
              </>
            )}
          </div>
        </div>
        <Footer isOpen={isOpen} />
        {/* {trackData.length === 0 ? "" : <AudioTrack trackData={trackData} />} */}
      </Router>
    </>
  );
};

export default AppRouter;
