import React, { useRef, useState } from "react";
import { tracks } from "../commonData/staticData";
import DisplayTrack from "./music/DisplayTrack";
import Controls from "./music/Controls";
import ProgressBar from "./music/ProgressBar";
import { BsCart } from "react-icons/bs";

const AudioTrack = ({ trackData }) => {
  // ? Original music track

  console.log("trackPAges", trackData);

  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(trackData[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= trackData.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(trackData[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(trackData[trackIndex + 1]);
    }
  };
  return (
    <>
      <div class="ms_player_wrapper">
        <div class="ms_player_close">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </div>
        <div class="player_mid">
          <div class="audio-player">
            <div id="jquery_jplayer_1" class="jp-jplayer"></div>
            <div
              id="jp_container_1"
              class="jp-audio"
              role="application"
              aria-label="media player"
            >
              <div class="player_left">
                <DisplayTrack
                  {...{
                    currentTrack,
                    audioRef,
                    setDuration,
                    progressBarRef,
                    handleNext,
                  }}
                />
                <div class="play_song_options">
                  <ul>
                    <li>
                      <a href="#">
                        <span class="song_optn_icon">
                          <i class="ms_icon icon_download"></i>
                        </span>
                        download now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="song_optn_icon">
                          <i class="ms_icon icon_fav"></i>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="song_optn_icon">
                          <i class="ms_icon icon_playlist"></i>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="song_optn_icon">
                          <i class="ms_icon icon_share"></i>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
                <span class="play-left-arrow">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </div>
              <div class="jp_queue_wrapper">
                <span class="que_text" id="myPlaylistQueue">
                  <BsCart />
                </span>
              </div>
              <div class="jp-type-playlist">
                <div class="jp-gui jp-interface">
                  <div className="row">
                    <div className="col-md-4">
                      <Controls
                        {...{
                          audioRef,
                          progressBarRef,
                          duration,
                          setTimeProgress,
                          trackData,
                          trackIndex,
                          setTrackIndex,
                          setCurrentTrack,
                          handleNext,
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <ProgressBar
                        {...{
                          progressBarRef,
                          audioRef,
                          timeProgress,
                          duration,
                        }}
                      />
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioTrack;
