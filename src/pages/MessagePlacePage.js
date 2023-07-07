import React from "react";
import InnerBanner from "../components/InnerBanner";

const MessagePlacePage = () => {
  return (
    <>
      <InnerBanner />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form">
              <h3>Custom message Placement</h3>
              <div class="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="Email" placeholder="Email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Address</label>
                <input type="text" placeholder="Address" class="form-control" />
              </div>
              <div class="form-group">
                <label>City</label>
                <input type="text" placeholder="City" class="form-control" />
              </div>
              <div class="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Country</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                >
                  <option selected>---Default---</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="U.K">Brazil</option>
                </select>
              </div>
              <div class="form-group">
                <label>State</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                >
                  <option selected>---Default---</option>
                  <option value="USA">California</option>
                  <option value="Canada">New York</option>
                  <option value="U.K">San Francisco</option>
                </select>
              </div>
              <div class="pro-form-btn text-center marger_top15">
                <a href="#" class="ms_btn">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePlacePage;
