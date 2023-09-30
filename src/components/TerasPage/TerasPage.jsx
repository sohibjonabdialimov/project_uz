import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img13 from "../../assets/img13.jpg";
import img16 from "../../assets/img16.jpg";
import { motion } from "framer-motion";
import "./teras.css";
const TerasPage = () => {
  return (
    <div className="teras_wrap" id="personal">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="teras_carousel"
      >
        <div
          id="teras__section"
          className="carousel slide teras_page"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#teras__section"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>

          <div className="carousel-inner">
            <img
              className="carousel-item active teras__section"
              src={img1}
              alt=""
            />
            <img className="carousel-item teras__section" src={img2} alt="" />
            <img className="carousel-item teras__section" src={img3} alt="" />
            <img className="carousel-item teras__section" src={img4} alt="" />

            <img className="carousel-item teras__section" src={img13} alt="" />

            <img className="carousel-item teras__section" src={img16} alt="" />
          </div>

          <div className="teras_carousel_button_group">
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#teras__section"
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
              data-bs-target="#teras__section"
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
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="teras_content"
      >
        <h3 className="section_title">SHAXSIY TERASLAR</h3>
        <p className="section_paragrph">
          Ko'chmas mulk bozoridagi birinchi va noyob taklif. 9-qavatda kvartira
          sotib olib, xaridor o'zining shaxsiy terasining egasiga aylanadi.
          Turar joyning yana bir yangiligi - lift orqali shaxsiy kirish
          imkoniyatiga ega penthausli minoralar.
        </p>
      </motion.div>
    </div>
  );
};

export default TerasPage;
