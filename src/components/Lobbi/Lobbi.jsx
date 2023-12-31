import React from "react";
import "./lobbi.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img13 from "../../assets/img13.jpg";
import img16 from "../../assets/img16.jpg";
import { motion } from "framer-motion";
const Lobbi = () => {
  return (
    <div className="lobbi_wrap" id="lobbi">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lobbi_content"
      >
        <h3 className="section_title section_first_title">Avtoparkovka</h3>
        <h3 className="section_title">va bolalar maydonchasi</h3>
        <p className="section_paragrph">
          Loyihamizda mashinangiz xavfsizligi uchun loyiha hovlisida
          avtoparkovkalar mavjud bo'ladi. <br/> Farzandlaringiz uchun uchun esa
          xavfsiz va zamonaviy bolalar maydonchasini barpo etamiz. Va siz
          farzandlaringizdan xavotir olmasangiz ham bo'ladi.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lobbi_carousel"
      >
        <div
          id="lobbi__section"
          className="carousel slide lobbi_page"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#lobbi__section"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>

          <div className="carousel-inner">
            <img
              className="carousel-item active lobbi__section"
              src={img1}
              alt=""
            />
            <img className="carousel-item lobbi__section" src={img2} alt="" />
            <img className="carousel-item lobbi__section" src={img3} alt="" />
            <img className="carousel-item lobbi__section" src={img4} alt="" />

            <img className="carousel-item lobbi__section" src={img13} alt="" />

            <img className="carousel-item lobbi__section" src={img16} alt="" />
          </div>

          <div className="lobbi_carousel_button_group">
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#lobbi__section"
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
              data-bs-target="#lobbi__section"
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
    </div>
  );
};

export default Lobbi;
