import React from "react";

const Header = ({ isOpen }) => {
  return (
    <>
      <div class={isOpen ? "ms_headerPost ms_header" : "ms_header"}>
        <div class="ms_top_left">
          <div class="ms_top_trend">
            <span>
              <a href="#" class="ms_color">
                LOGO
              </a>
            </span>{" "}
            <span class="top_marquee">
              <a href="#"></a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
