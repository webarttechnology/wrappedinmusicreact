import React from "react";
import InnerBanner from "../components/InnerBanner";

const CategoryDetails = () => {
  return (
    <>
      <InnerBanner />
      <div class="ms_genres_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div class="album_single_data">
              <div class="album_single_img">
                <img
                  src="assets/images/featured/song1.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="album_single_text">
                <h2>Ava Cornish</h2>
                <p class="singer_name">Singer, New York</p>
                <div class="about_artist">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in
                  <br /> reprehenderit in voluptate velit esse cillum dolor...{" "}
                  <a href="#">Read More</a>
                </div>
              </div>

              <ul class="more_option">
                <li>
                  <a href="#">
                    <span class="opt_icon">
                      <span class="icon icon_fav"></span>
                    </span>
                    Add To Favourites
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="opt_icon">
                      <span class="icon icon_queue"></span>
                    </span>
                    Add To Queue
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="opt_icon">
                      <span class="icon icon_dwn"></span>
                    </span>
                    Download Now
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="opt_icon">
                      <span class="icon icon_playlst"></span>
                    </span>
                    Add To Playlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="opt_icon">
                      <span class="icon icon_share"></span>
                    </span>
                    Share
                  </a>
                </li>
              </ul>
            </div>

            <div class="album_inner_list">
              <div class="album_list_wrapper">
                <ul class="album_list_name">
                  <li>ID</li>
                  <li>Song Title</li>
                  <li>GENRES & MOODS</li>
                  <li>Action</li>
                </ul>
                <ul>
                  <li>
                    <a href="#">
                      <span class="play_no">01</span>
                      <span class="play_hover"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Bloodlust</a>
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
