import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useLocation, useNavigate } from "react-router";
import { IMG, NOIMG } from "../api/constant";
import { Link } from "react-router-dom";
import { MESSAGE, TOKEN_CODE } from "../schemas/Validation";
const CategoryDetails = ({ app_musicData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cataGoriData, setCataGoriData] = useState([]);
  const [songData, setSongData] = useState([]);

  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.subCategoryIdDetails(
        localStorage.getItem("subCataId"),
        header
      );
      console.log("response", response);
      setCataGoriData(response.data.data);
      setSongData(response.data.data.music);
      app_musicData(response.data.data.music);
      console.log("music", response.data.data.music);
    } catch (error) {}
  };

  const add_music_user = async (songId) => {
    try {
      const reqObj = {
        song_id: songId,
        registration_id: localStorage.getItem("__userId"),
      };
      const response = await API.add_order(reqObj, TOKEN_CODE);
      if (response.data.success === 1) {
        navigate("/voice-message");
        MESSAGE(response.data.msg, 1);
      } else {
        MESSAGE(response.data.msg);
      }
      console.log("response", response);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
                <p class="singer_name">
                  Category ,{" "}
                  <span className="commonColor">
                    {cataGoriData.category_id}
                  </span>
                </p>
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
                {songData.length === 0 ? (
                  <h1 className="noRechor">No Data Found</h1>
                ) : (
                  songData.map((item, index) => (
                    <ul>
                      <li>
                        <Link to="#">
                          <span class="play_no">{index + 1}</span>
                          <span class="play_hover"></span>
                        </Link>
                      </li>
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                      <li>
                        <a href="#">Rap / Hip-Hop, Anniversary, heartfe</a>
                      </li>

                      <li>
                        <Link
                          onClick={() =>
                            localStorage.setItem("songId", item.id)
                          }
                          to="/voice-message"
                          class="cart_btn"
                          state={{ songId: item.id }}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </Link>
                        {/* {item.Orders.length === 0 ? (
                          <Link
                            onClick={() => add_music_user(item.id)}
                            //to="/voice-message"
                            class="cart_btn"
                            state={{ songId: item.id }}
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </Link>
                        ) : (
                          <Link class="cart_btn" state={{ songId: item.id }}>
                            <i class="fa fa-check" aria-hidden="true"></i>
                          </Link>
                        )} */}
                      </li>
                    </ul>
                  ))
                )}
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
