import React, { useEffect } from "react";
import Genres from "../components/Genres";
import SongCarousal from "../components/SongCarousal";
import InnerBanner from "../components/InnerBanner";

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <div class="ms_genres_wrapper">
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
        <div class="row">
          <div class="cat action">
            <label class="active">
              <input type="checkbox" value="1" />
              <span>All</span>
            </label>
            <label>
              <input type="checkbox" value="1" />
              <span>Genre</span>
            </label>
            <label>
              <input type="checkbox" value="1" />
              <span>Mood</span>
            </label>
            <label>
              <input type="checkbox" value="1" />
              <span>Occasion</span>
            </label>
          </div>
        </div>
        <Genres />
        <SongCarousal cateTitle="Popular Occasions" />
      </div>
    </>
  );
};

export default Category;
