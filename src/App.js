import { useEffect, useState } from "react";
import AppRouter from "./Router/AppRouter";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as API from "./api/index";
function App() {
  const [trackData, setTrackData] = useState([]);
  const all_musicData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.all_song_list(header);
      console.log("allMusic", response);
      setTrackData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    all_musicData();
  }, []);
  return (
    <>
      <AppRouter trackData={trackData} setTrackData={setTrackData} />
      <ToastContainer />
    </>
  );
}

export default App;
