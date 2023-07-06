import React from "react";
import { useLocation } from "react-router";
import InnerBanner from "../components/InnerBanner";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const VoiceMess = () => {
  const location = useLocation();
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };
  return (
    <>
      <InnerBanner />
      <div className="voiceRecordSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div
                class="ms_profile_box"
                style={{ width: "100%", height: "100%" }}
              >
                <div class="ms_pro_form voiceForm">
                  <ul
                    class="nav nav-tabs justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        I Have My Own Script
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Choose a Preset Script
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <AudioRecorder
                        recorderControls={recorderControls}
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                          noiseSuppression: true,
                          echoCancellation: true,
                        }}
                        downloadOnSavePress={true}
                        downloadFileExtension="mp3"
                      />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="form-group">
                        <label>Select Script From list</label>
                        <select class="form-control">
                          <option>--- Select ---</option>
                          <option>Script 1</option>
                          <option>Script 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* <div class="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="Email"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div> */}

                  {/* <div class="pro-form-btn text-center marger_top15">
                    <a href="#" class="ms_btn">
                      Submit
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceMess;
