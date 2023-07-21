import React, { useRef, useState } from "react";

import DisplayTrack from "./music/DisplayTrack";
import Controls from "./music/Controls";
import ProgressBar from "./music/ProgressBar";
import { BsCart } from "react-icons/bs";

const AudioTrack = () => {
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
  // ? Original music track
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
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
                          tracks,
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
