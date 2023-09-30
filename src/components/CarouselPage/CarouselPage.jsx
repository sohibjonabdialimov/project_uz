import React from "react";
import img1 from "../../assets/3.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/4.jpg";
import img4 from "../../assets/6.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./carousel.css";
const CarouselPage = () => {
  return (
    <>
      <div
        id="hero__section"
        className="carousel slide carousel_page"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active hero__section">
            <div className="hero__img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="carousel-item hero__section">
            <div className="hero__img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="carousel-item hero__section">
            <div className="hero__img">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="carousel-item hero__section">
            <div className="hero__img">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>

        <div className="carousel_button_group">
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero__section"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
