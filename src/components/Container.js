import React from "react";
import Header from "./Header";
import SongCarousal from "./SongCarousal";
import Genres from "./Genres";
import Bestsellers from "./Bestsellers";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

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
        <SongCarousal ftitle="Trending Songs" />
        <Genres />
        <Bestsellers />
        <HowItWorks />
        <SongCarousal title="Custom Messages For Any Occasion" />
        <Testimonials />
        <Faq />
      </div>
    </>
  );
};

export default Container;
