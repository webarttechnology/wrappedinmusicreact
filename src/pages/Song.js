import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link } from "react-router-dom";

const Song = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <div class="ms_top_artist">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="srhbyx">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Songs"
                />
                <div class="icnprty">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 mx-7">
              <Link to="/category">
                <div class="ms_rcnt_box marger_bottom30">
                  <div class="ms_rcnt_box_img bxyimg">
                    <img
                      src="assets/images/radio/img2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="ms_main_overlay">
                      <div class="ms_box_overlay"></div>
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
                  </div>
                  <div class="ms_rcnt_box_text text-center">
                    <h3>
                      <a href="songs-genres.html">Songs By Genres</a>
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-3 col-md-6 mx-7">
              <div class="ms_rcnt_box marger_bottom30">
                <a href="songs-occassion.html">
                  <div class="ms_rcnt_box_img bxyimg">
                    <img src="assets/img2.jpg" alt="" class="img-fluid" />
                    <div class="ms_main_overlay">
                      <div class="ms_box_overlay"></div>
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
                  </div>
                </a>
                <div class="ms_rcnt_box_text text-center">
                  <h3>
                    <a href="songs-occassion.html">Songs By Occasions</a>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mx-7">
              <div class="ms_rcnt_box marger_bottom30">
                <a href="songs-mood.html">
                  <div class="ms_rcnt_box_img bxyimg">
                    <img
                      src="assets/images/artist/artist2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                    <div class="ms_main_overlay">
                      <div class="ms_box_overlay"></div>
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
                  </div>
                </a>
                <div class="ms_rcnt_box_text text-center">
                  <h3>
                    <a href="songs-mood.html">Songs By Mood</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
