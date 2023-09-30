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
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Loyiha haqida
        </motion.h2>
        <div className="about_page_content">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="about_page_desc"
          >
            <p>
              Mirabad Avenue — уникальный проект. Это первая резиденция
              премиум-класса в Узбекистане, являющаяся совместным проектом с
              британским архитектурным бюро Chapman Taylor.
            </p>
            <p>
              Уникальность проекта не только в новаторском подходе к
              проектированию, но и в новом формате использования пространства.
              Например, для подавления уличного шума, двор резиденции будет
              расположен на платформе, возвышающейся над землёй на 4 метра. Эта
              же платформа послужит площадью для подземного паркинга жителей
              резиденции. И подобных нововведений в резиденции масса.
            </p>
            <p>
              Именно в Mirabad Avenue расположится первая в стране шопинг-авеню
              по всей территории комплекса. Бутики, рестораны, салоны и шоурумы
              создадут новый облик столицы, выводя одну из оживлённых
              центральных улиц на один уровень с Елисейскими полями, Арбатом и
              Пятой Авеню.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="about_page_info"
          >
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>Двор на платформе</h3>
                <p>
                  Дворы возвышаются на 4 метра, под каждым — 2 уровня паркинга.
                </p>
              </div>
            </div>
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>Двор-парк</h3>
                <p>
                  Подобранные растения создадут особую эко-систему в каждом
                  дворе.
                </p>
              </div>
            </div>
            <div className="about_page_info_wrap">
              <div className="project_info_title">
                <h3>Шопинг-авеню</h3>
                <p>Длина по периметру резиденции превысит 2 км.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
