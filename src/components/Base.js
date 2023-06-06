import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";
import Footer from "./Footer";

const Base = () => {
  return (
    <>
      <div className="ms_main_wrapper">
        <Sidebar />
        <Container />
      </div>
      <Footer />
    </>
  );
};

export default Base;
