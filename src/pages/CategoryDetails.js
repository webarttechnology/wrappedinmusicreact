import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useLocation, useParams } from "react-router";
import { IMG, NOIMG } from "../api/constant";
import { Link } from "react-router-dom";
const CategoryDetails = () => {
  const location = useLocation();
  const params = useParams();
  console.log("location", location, params);
  const [cataGoriData, setCataGoriData] = useState([]);
  const [songData, setSongData] = useState([]);
  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        category_id: location.state.id,
        subcategory_id: params.id,
      };
      const response = await API.subCategoryIdDetails(reqObj, header);
      console.log("response", response);
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
                      <Link
                        to="/voice-message"
                        class="cart_btn"
                        state={{ songId: item.id }}
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </Link>
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
