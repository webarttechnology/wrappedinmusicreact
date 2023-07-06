import React from "react";
import { Link } from "react-router-dom";
import { IMG, NOIMG } from "../api/constant";

const Genres = ({ tableData, cataNameSlg }) => {
  return (
    <>
      <div class="ms_genres_wrapper">
        <div class="row">
          <div class="col-lg-12">
            <div class="ms_heading">
              <h1>Top {cataNameSlg}</h1>
              <span class="veiw_all">
                <a href="#">view more</a>
              </span>
            </div>
          </div>
          {tableData.map((item, index) => (
            <div class="col-lg-4" key={index}>
              <Link
                to={`/category-details/${item.id}`}
                state={{ id: item.category_id }}
              >
                <div class="ms_genres_box">
                  <img
                    src={item.image === "" ? NOIMG : IMG + item.image}
                    alt=""
                    class="img-fluid"
                  />
                  <div class="ms_main_overlay">
                    <div class="ms_box_overlay"></div>
                    <div class="ms_play_icon">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </div>
                    <div class="ovrly_text_div">
                      <span class="ovrly_text1">
                        <a href="#">{item.name}</a>
                      </span>
                      <span class="ovrly_text2">
                        <a href="#">view song</a>
                      </span>
                    </div>
                  </div>
                  <div class="ms_box_overlay_on">
                    <div class="ovrly_text_div">
                      <span class="ovrly_text1">
                        <a href="#">{item.name}</a>
                      </span>
                      <span class="ovrly_text2">
                        <a href="#">view song</a>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
