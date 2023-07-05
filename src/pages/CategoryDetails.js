import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useLocation } from "react-router";
import { IMG, NOIMG } from "../api/constant";
const CategoryDetails = () => {
  const location = useLocation();
  console.log("location", location);
  const [cataGoriData, setCataGoriData] = useState([]);
  const [songData, setSongData] = useState([]);
  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.subCategoryIdDetails(
        location.state.id,
        header
      );
      setCataGoriData(response.data.data);
      setSongData(response.data.data.music);
    } catch (error) {}
  };
  useEffect(() => {
    getVatagoriy_details();
  }, []);

  return (
    <>
      <InnerBanner />
      <div class="ms_genres_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div class="album_single_data">
              <div class="album_single_img">
                <img
                  src={
                    cataGoriData.image === "" ? NOIMG : IMG + cataGoriData.image
                  }
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="album_single_text">
                <h2>{cataGoriData.name}</h2>
                <p class="singer_name">Singer, New York</p>
                <div class="about_artist">{cataGoriData.details}</div>
              </div>
            </div>

            <div class="album_inner_list">
              <div class="album_list_wrapper">
                <ul class="album_list_name">
                  <li>ID</li>
                  <li>Song Title</li>
                  <li>GENRES & MOODS</li>
                  <li>Action</li>
                </ul>
                {songData.map((item, index) => (
                  <ul>
                    <li>
                      <a href="#">
                        <span class="play_no">{index + 1}</span>
                        <span class="play_hover"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">{item.name}</a>
                    </li>
                    <li>
                      <a href="#">Rap / Hip-Hop, Anniversary, heartfe</a>
                    </li>

                    <li>
                      <a href="#" class="cart_btn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="ms_view_more padder_bottom20">
          <a href="#" class="ms_btn">
            view more
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
