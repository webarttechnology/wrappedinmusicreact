import React from "react";
import InnerBanner from "../components/InnerBanner";
import { Link } from "react-router-dom";

const MusicDetails = () => {
  return (
    <>
      <InnerBanner />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form songDetais">
              <h3 className="headingC">Song Order</h3>
              <div className="justify-content-center row justify-content-evenly">
                <div className="col-md-4">
                  <img
                    src="https://www.seekpng.com/png/detail/372-3729023_open-google-music-icon-png.png"
                    className="w-100 musiDetImg"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="musicheading">Country Love Songs</h2>
                  <strong className="musicPrice">Price : $15.00</strong>
                  <span className="ownMusic">
                    Record Message : <i class="bi bi-music-note-beamed"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    Quae, eligendi earum? Consequatur itaque provident.
                  </p>
                  <div class="marger_top15 pro-form-btn text-left text-start">
                    <Link to="/thankyou" class="ms_btn m-0">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicDetails;
