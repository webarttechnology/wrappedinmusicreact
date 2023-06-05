import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

const Base = () => {
  return (
    <>
      <div className="ms_main_wrapper">
        <Sidebar />
        <Container />
      </div>
    </>
  );
};

export default Base;
