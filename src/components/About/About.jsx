import React from "react";
import "./about.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about_page" className="about_section px-6 sm:px-16 lg:px-10">
      <div className="about_page_wrap lg:px-28">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Loyiha haqida
        </motion.h2>
        <div className="about_page_content">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="about_page_desc"
          >
            <p>
            Loyihamiz A va B blokdan iborat bo'lib, 2,8 gektarda qurilmoqda. Xonadonlarimiz 59.58m2 dan 90.64m2 gacha yani 1, 2 hamda 3 xonali xonadonlarimiz mavjud. Balkon qismining hajmi 3 4 m2 gacha yetadi.
            </p>
            <p>
            Xonadonalrimizni 18 oygacha muddatli to'lovda xatid qilishingiz mumkin. 
            </p>
            <p>
            Undan tashqari majmuamizda Boshqaruv Servis Kompaniya ham mavjud bo'ladi. Tom qismi quyosh batareyalaridan iborat bo'ladi.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="about_page_info"
          >
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>Bolalar maydonachasi</h3>
                <p>
                Farzandingiz uchun xavfsiz va zamonaviy bolalar maydonchasi mavjud boladi.
                </p>
              </div>
            </div>
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>Avtoparkovka</h3>
                <p>
                Mashinangizni xavfsizligini o'ylagan holda biz avtoparkovka ham yaratdik.
                </p>
              </div>
            </div>
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>18 oyli muddatli to'lov</h3>
                <p>Xonadonlarimizni 18 oyli muddatli tolovga xarid qilish imkoniyatiga egasiz.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
