import React, { useEffect, useState } from "react";
import Genres from "../components/Genres";
import SongCarousal from "../components/SongCarousal";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useNavigate } from "react-router";
const Category = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [catagoriMain, setCatagoriMain] = useState([]);
  const [categoriData, setCategoriData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [cataNameSlg, setCataNameSlg] = useState("");

  const [dataArry, setDataArry] = useState([]);

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
    console.log("cataName", cataName);
    setIsActive(true);
    setCategoriData(catid);
    setCataNameSlg(cataName);
    dataArry.includes(catid) == false
      ? dataArry.push(catid)
      : delete dataArry[dataArry.indexOf(catid)];
    console.log("dataArry", dataArry);
    try {
      const reQobj = {
        category_id: dataArry.toString(),
      };
      console.log("reQobj", reQobj);
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
