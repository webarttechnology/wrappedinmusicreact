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
  const tracks = [
    {
      title: "Death Bed",
      artist: "Powfu",
      artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
      id: "1",
    },
    {
      title: "Bad Liar",
      artist: "Imagine Dragons",
      artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      id: "2",
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
      url: "https://samplesongs.netlify.app/Faded.mp3",
      id: "3",
    },
    {
      title: "Hate Me",
      artist: "Ellie Goulding",
      artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
      id: "4",
    },
    {
      title: "Solo",
      artist: "Clean Bandit",
      artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
      url: "https://samplesongs.netlify.app/Solo.mp3",
      id: "5",
    },
    {
      title: "Without Me",
      artist: "Halsey",
      artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      url: "https://samplesongs.netlify.app/Without%20Me.mp3",
      id: "6",
    },
  ];
  const dataRes = [
    {
      id: 32,
      title: "tttddfdfff",
      url: "uploads/songs/1690268075142.mp3",
      artwork: "uploads/songs/image/1690268075171.png",
      description: "test ghdfhdhd",
      duration: "5:23",
      amount: 20,
      is_active: "1",
    },
  ];
  const [musicIndex, setMusicIndex] = useState("");
  const [songData, setSongData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(songData[trackIndex]);

  const navigate = useNavigate();
  const location = useLocation();

  const [cataGoriData, setCataGoriData] = useState([]);

  const musiaChoose = (index) => {
    setIsPlaying(true);
    setCurrentTrack(songData[index]);
  };

  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.subCategoryIdDetails(
        localStorage.getItem("subCataId"),
        header
      );
      localStorage.setItem("_cataGorid", response.data.data.category_id);
      console.log("response", response);
      setCataGoriData(response.data.data);
      setCurrentTrack(response.data.data.music[trackIndex]);
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
                  <li>GENRES & MOODS</li>
                  <li>Action</li>
                </ul>
                {songData.length === 0 ? (
                  <h1 className="noRechor">No Data Found</h1>
                ) : (
                  songData.map((item, index) => (
                    <ul>
                      <li
                        className={musicIndex === item ? "ball" : "calll"}
                        onClick={() => musiaChoose(index)}
                      >
                        <Link
                          to="javascript:void(0)"
                          // onClick={() => singMusicPlay(index)}
                        >
                          <span class="play_no">{index + 1}</span>
                          <span class="play_hover"></span>
                        </Link>
                      </li>
                      <li onClick={() => musiaChoose(index)}>
                        <Link to="javascript:void(0)">{item.title}</Link>
                      </li>
                      <li onClick={() => musiaChoose(index)}>
                        <Link to="javascript:void(0)">
                          $ 50 :00{item.amount}
                        </Link>
                      </li>
                      <li onClick={() => musiaChoose(index)}>
                        <Link to="javascript:void(0)">
                          Rap / Hip-Hop, Anniversary, heartfe
                        </Link>
                      </li>
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
