import React, { useEffect, useState } from "react";
import Genres from "../components/Genres";
import SongCarousal from "../components/SongCarousal";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
const Category = () => {
  const [isActive, setIsActive] = useState(false);
  const [catagoriMain, setCatagoriMain] = useState([]);
  const [categoriData, setCategoriData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [cataNameSlg, setCataNameSlg] = useState("");

  const categoriy_details = async (catid, cataName) => {
    const header = localStorage.getItem("_tokenCode");
    setIsActive(true);
    setCategoriData(catid);
    setCataNameSlg(cataName);
    try {
      const response = await API.subCategoryId(catid, header);
      console.log("responseddd", response);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const activeButton = () => {
    setIsActive(false);
    setCataNameSlg("All");
    setCategoriData("");
    getAll_subcatagori();
  };

  const getAll_subcatagori = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.getMain_subCategory(header);
      console.log("responseGGG", response);
      setTableData(response.data.data);
    } catch (error) {}
  };
  const get_categoryList = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_subCategory(header);
      console.log("response", response);
      setCatagoriMain(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    get_categoryList();
    getAll_subcatagori();
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
            <label onClick={activeButton} class={isActive ? "" : "active"}>
              <span>All</span>
            </label>
            {catagoriMain.map((item, index) => (
              <label
                className={categoriData === item.id ? "active" : ""}
                key={index}
                onClick={() => categoriy_details(item.id, item.name)}
              >
                <span>{item.name}</span>
              </label>
            ))}
          </div>
        </div>
        {tableData === "" || tableData === undefined ? (
          ""
        ) : (
          <Genres cataNameSlg={cataNameSlg} tableData={tableData} />
        )}

        <SongCarousal cateTitle="Popular Occasions" />
      </div>
    </>
  );
};

export default Category;
