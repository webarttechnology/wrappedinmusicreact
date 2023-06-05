import React from "react";
import Header from "./Header";
import SongCarousal from "./SongCarousal";

const Container = () => {
  return (
    <>
      <div class="ms_content_wrapper padder_top80">
        <Header />
        <div class="ms-banner">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="ms_banner_video">
                  <video
                    src="assets/wrappervideo.mp4"
                    loop=""
                    muted=""
                    autoplay=""
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SongCarousal />
      </div>
    </>
  );
};

export default Container;
