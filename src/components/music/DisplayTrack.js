import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.url}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div class="ms_play_song">
        <div class="play_song_name">
          <a href="javascript:void(0);" id="playlist-text">
            <div class="jp-now-playing flex-item">
              <div class="jp-track-name">
                <span class="que_img">
                  {currentTrack.artwork ? (
                    <img src={currentTrack.artwork} alt="audio avatar" />
                  ) : (
                    <div className="icon-wrapper">
                      <span className="audio-icon">
                        <BsMusicNoteBeamed />
                      </span>
                    </div>
                  )}
                </span>
                <div class="que_data">
                  {currentTrack.title}
                  <div class="jp-artist-name">{currentTrack.artist}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="audio-info d-none">
        <div className="audio-image">
          {currentTrack.artwork ? (
            <img src={currentTrack.artwork} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
