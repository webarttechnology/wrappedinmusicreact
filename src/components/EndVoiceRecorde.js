import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { Link } from "react-router-dom";

const EndVoiceRecorde = ({
  setVoiceMessage,
  voiceMessage,
  voiceData1,
  setExtraAmount,
}) => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      setVoiceMessage(base64data);
      //console.log(base64data);
    };
    const audioTag = document.querySelector("#recordAudio3");
    audioTag.appendChild(audio);
  };
  return (
    <>
      <AudioRecorder
        recorderControls={recorderControls}
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="mp3"
      />
      <div className="checkBok">
        <input
          type="checkbox"
          id="fruit4"
          name="fruit-4"
          value="5"
          onChange={(e) => setExtraAmount(e.target.value)}
        />
        <label for="fruit4" className="textHad">
          Enhance my audio (Additional $5 Apply)
        </label>
      </div>
      {voiceMessage === "" ? (
        <Link onClick={voiceData1} className="ms_btn margin_top">
          Confirm Audio
        </Link>
      ) : (
        <Link
          onClick={voiceData1}
          to="/message-placement"
          className="ms_btn margin_top"
        >
          Confirm Audio
        </Link>
      )}
    </>
  );
};

export default EndVoiceRecorde;
