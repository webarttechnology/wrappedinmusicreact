import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useLocation, useNavigate } from "react-router";
import { IMG, NOIMG } from "../api/constant";
import { Link } from "react-router-dom";
import { MESSAGE, TOKEN_CODE } from "../schemas/Validation";
import AudioTrack from "../components/AudioTrack";
import CommonCata from "../components/CommonCata";
import CataDetails from "./CataDetails";
const CategoryDetails = () => {
  const [musicIndex, setMusicIndex] = useState("");
  const [songData, setSongData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(songData[trackIndex]);

  const [cataGoriData, setCataGoriData] = useState([]);

  const musiaChoose = (index, songid) => {
    console.log("index", index);
    console.log("songid", songid);
    setIsPlaying(true);
    setMusicIndex(songid);
    setCurrentTrack(songData[index]);
    setTrackIndex(index)
  };

  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.subCategoryIdDetails(
        localStorage.getItem("subCataId"),
        header
      );
      localStorage.setItem("_cataGorid", response.data.data.category_id);
      console.log("response", response.data.data.music);
      setCataGoriData(response.data.data);
      setCurrentTrack(response.data.data.music[trackIndex]);
      console.log(
        "response.data.data.music[trackIndex]",
        response.data.data.music[trackIndex]
      );
      setSongData(response.data.data.music);
    } catch (error) {}
  };

  const add_music_user = (songId, songAmount, title) => {
    try {
      const songObj = {
        song_id: songId,
        song_amount: 50,
        title: title,
      };
      localStorage.setItem("__musicData", JSON.stringify(songObj));
    } catch (error) {}
  };

  console.log("cataGoriData.image", cataGoriData.image);

  useEffect(() => {
    window.scrollTo(0, 0);
    getVatagoriy_details();
  }, []);

  return (
    <>
      <InnerBanner />
      {/* <CataDetails /> */}
      <div class="ms_genres_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div class="album_single_data">
              <div class="album_single_img">
                <img
                  src={
                    cataGoriData.image === undefined
                      ? NOIMG
                      : IMG + cataGoriData.image
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
                    {cataGoriData.category_name}
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
                  <li>Amount</li>
                  {/* <li>GENRES & MOODS</li> */}
                  <li>Action</li>
                </ul>
                {songData.length === 0 ? (
                  <h1 className="noRechor">No Data Found</h1>
                ) : (
                  songData.map((item, index) => (
                    <ul>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          <span class="play_no">
                            {musicIndex === item.id ? "" : index + 1}
                          </span>
                          {musicIndex === item.id ? (
                            <img
                              className="playIcon"
                              src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
                            />
                          ) : (
                            <span class="play_hover"></span>
                          )}
                        </Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">{item.title}</Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          $ {item.amount} : 00
                        </Link>
                      </li>
                      {/* <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          Rap / Hip-Hop, Anniversary, heartfe
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          onClick={() =>
                            add_music_user(item.id, item.amount, item.title)
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
      {songData.length === 0 ? (
        ""
      ) : (
        <AudioTrack
          musiaChoose={musiaChoose}
          musicIndex={musicIndex}
          setMusicIndex={setMusicIndex}
          cataName={cataGoriData.category_name}
          tracks={songData}
          setTrackIndex={setTrackIndex}
          trackIndex={trackIndex}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      )}
    </>
  );
};

export default CategoryDetails;
