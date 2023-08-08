import React, { useEffect, useState } from "react";
import Genres from "../components/Genres";
import SongCarousal from "../components/SongCarousal";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useNavigate } from "react-router";
const Category = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("0");
  const [catagoriMain, setCatagoriMain] = useState([]);
  const [categoriData, setCategoriData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [cataNameSlg, setCataNameSlg] = useState("");

  const [dataArry, setDataArry] = useState([]);
  console.log("isActive", isActive);
  const activeButton = (data) => {
    if (data === "0") {
      setIsActive(data);
      getAll_subcatagori();
    }
    setCategoriData("");
  };

  const getAll_subcatagori = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.getMain_subCategory(header);
      console.log("response", response);
      if (response.data.success === 1) {
        setTableData(response.data.data);
      } else {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };

  const categoriy_details = async (catid, cataName) => {
    const header = localStorage.getItem("_tokenCode");
    if (catid === "1") {
      setIsActive(catid);
    } else if (catid === "2") {
      setIsActive(catid);
    } else if (catid === "3") {
      setIsActive(catid);
    }

    setCategoriData(catid);
    setCataNameSlg(cataName);
    dataArry.includes(catid) == false
      ? dataArry.push(catid)
      : dataArry.splice(dataArry.indexOf(catid), 1);

    try {
      const reQobj = {
        category_id: catid,
      };
      console.log("reQobj", reQobj);
      if (reQobj.category_id === "") {
        setIsActive(false);
        getAll_subcatagori();
      }
      const response = await API.subCategoryId(reQobj, header);
      console.log("responseddd", response);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const get_categoryList = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_subCategory(header);
      console.log("get_categoryList", response);
      if (response.data.success === 1) {
        setCatagoriMain(response.data.data);
      } else {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    get_categoryList();
    getAll_subcatagori();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <InnerBanner /> */}
      <div class="ms_genres_wrapper">
        <div class="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center songHead">Songs Selection</h2>
          </div>
          <div class="col-md-7">
            <div class="cat action">
              <label
                onClick={() => activeButton("0")}
                class={isActive === "0" ? "active" : ""}
              >
                <span>All</span>
              </label>
              <label
                onClick={() => categoriy_details("1")}
                class={isActive === "1" ? "active" : ""}
              >
                <span>Genre</span>
              </label>
              <label
                onClick={() => categoriy_details("2")}
                class={isActive === "2" ? "active" : ""}
              >
                <span>Occasion</span>
              </label>
              <label
                onClick={() => categoriy_details("3")}
                class={isActive === "3" ? "active" : ""}
              >
                <span>Mood</span>
              </label>
              {/* {catagoriMain.map((item, index) => (
                <>
                  <label key={index}>
                    <input
                      onChange={() => categoriy_details(item.id, item.name)}
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                    />
                    <span>{item.name}</span>
                  </label>
                </>
              ))} */}
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div className="col-md-5">
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

        {tableData === "" || tableData === undefined ? (
          ""
        ) : (
          <Genres cataNameSlg={cataNameSlg} tableData={tableData} />
        )}

        {/* <SongCarousal cateTitle="Popular Occasions" /> */}
      </div>
    </>
  );
};

export default Category;
