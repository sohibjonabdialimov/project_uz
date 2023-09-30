import React from "react";
import "./address.css";
import img from "../../assets/address.jpg";
import {motion} from "framer-motion";
const Address = () => {
  return (
    <div className="address_wrap">
      <motion.div initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }} className="address_content">
        <h3 className="section_title">Manzil</h3>
        <p className="section_paragrph">
          Mirobod shoh ko'chasi qurilishi uchun tanlangan joy yangi savdo va
          turmush tarzi markazi uchun ideal. Turar joy poytaxtning nufuzli
          hududida joylashgan bo'lib, uning yonida aholi va mehmonlarning
          yashashi uchun zarur bo'lgan hamma narsa - fitnes klublari, xususiy
          bolalar bog'chalari va maktablar, supermarketlar, bog'lar va boshqalar
          mavjud.
        </p>
      </motion.div>
      <motion.div initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }} className="address_carousel">
        <img src={img} alt="" />
      </motion.div>

    </div>
  );
};

export default Address;
