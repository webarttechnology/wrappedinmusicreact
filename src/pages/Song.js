import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../api/index";
import { IMG, NOIMG } from "../api/constant";
const Song = ({ setIsLogin }) => {
  const [catagoriMain, setCatagoriMain] = useState([]);
  const navigate = useNavigate();
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <div class="ms_top_artist">
        <div class="container-fluid">
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
          <div class="row justify-content-center">
            {catagoriMain.map((item, index) => (
              <div class="col-lg-3 col-md-6 mx-7" key={index}>
                <Link to="/category">
                  <div class="ms_rcnt_box marger_bottom30">
                    <div class="ms_rcnt_box_img bxyimg">
                      <img
                        src={item.image === "" ? NOIMG : IMG + item.image}
                        alt=""
                        class="img-fluid"
                      />
                      <div class="ms_main_overlay">
                        <div class="ms_box_overlay"></div>
                      </div>
                    </div>
                    <div class="ms_rcnt_box_text text-center">
                      <h3>Songs By {item.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
