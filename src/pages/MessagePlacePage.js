import React from "react";
import InnerBanner from "../components/InnerBanner";
import { Link } from "react-router-dom";

const MessagePlacePage = () => {
  return (
    <>
      <InnerBanner />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form">
              <h3 className="headingC">Custom message Placement</h3>
              <div class="form-group text-center">
                <label>
                  <input type="radio" />
                  <span className="d-inline-block ms-4 ps-5">
                    At The Start{" "}
                  </span>
                </label>
              </div>
              <div class="form-group">
                <label>
                  <input type="radio" />
                  <span className="d-inline-block ms-4 ps-5">At The End </span>
                </label>
              </div>
              <div class="form-group">
                <label>Custom Duration</label>
                <input
                  type="text"
                  placeholder="Enter Hare"
                  class="form-control"
                />
              </div>

              <div class="pro-form-btn text-center marger_top15">
                <Link to="/order-details" class="ms_btn">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePlacePage;
