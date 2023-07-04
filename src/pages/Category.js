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
    setIsActive(true);
    setCategoriData(catid);
    setCataNameSlg(cataName);
    try {
      const response = await API.subCategoryId(catid);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const activeButton = () => {
    setIsActive(false);
    setCategoriData("");
    getAll_subcatagori();
  };

  const getAll_subcatagori = async () => {
    try {
      const response = await API.getMain_subCategory();
      console.log("responseGGG", response);
      setTableData(response.data.data);
    } catch (error) {}
  };
  const get_categoryList = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_subCategory();
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
        <Genres cataNameSlg={cataNameSlg} tableData={tableData} />
        <SongCarousal cateTitle="Popular Occasions" />
      </div>
    </>
  );
};

export default Category;
