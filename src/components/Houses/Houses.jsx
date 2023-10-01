import React, { useState } from "react";
import "./houses.css";
import { motion, AnimatePresence } from "framer-motion";

const Houses = () => {
  const [state, setState] = useState(0);
  const [bool, setBool] = useState(true);
  return (
    <section id="plan" className="plan lg:px-72 sm:px-40">
      <div className="plan_btn_group">
        <button
          onClick={() => {
            setState(true);
            setBool(true);
          }}
        >
          Hammasi
        </button>
        <button
          onClick={() => {
            setState(true);
            setBool(false);
          }}
        >
          1 xonali
        </button>
        <button
          onClick={() => {
            setState(false);
            setBool(true);
          }}
        >
          2 xonali
        </button>
        <button
          onClick={() => {
            setState(false);
            setBool(false);
          }}
        >
          4 xonali
        </button>
      </div>

      {state ? (
        bool ? (
          <AnimatePresence>
            {state && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="plan_wrap"
              >
                <div className="plan_content">
                  <div className="plan_img">
                    <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
                  </div>
                  <div className="plan_desc">
                    <h2>Xonadon N = 1</h2>
                    <div className="plan_info">
                      <p>5-15-qavatlar</p>
                      <p>1-4 bino</p>
                      <p>
                        41.90 m<sup>2</sup>
                      </p>
                    </div>
                    <a href="#contact" className="plan_btn plan_btn_wiggle">
                      Arizangizni yuboring
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="plan_wrap"
          >
            <div className="plan_content">
              <div className="plan_img">
                <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
              </div>
              <div className="plan_desc">
                <h2>Xonadon N = 2</h2>
                <div className="plan_info">
                  <p>5-15-qavatlar</p>
                  <p>1-4 bino</p>
                  <p>
                    41.90 m<sup>2</sup>
                  </p>
                </div>
                <a href="#contact" className="plan_btn plan_btn_wiggle">
                  Arizangizni yuboring
                </a>
              </div>
            </div>
          </motion.div>
        )
      ) : bool ? (
        <AnimatePresence>
          {bool && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="plan_wrap"
            >
              <div className="plan_content">
                <div className="plan_img">
                  <img src="https://www.chaqar.uz/img/flat-3.jpg" alt="" />
                </div>
                <div className="plan_desc">
                  <h2>Xonadon N = 3</h2>
                  <div className="plan_info">
                    <p>5-15-qavatlar</p>
                    <p>1-4 bino</p>
                    <p>
                      69.05 m<sup>2</sup>
                    </p>
                  </div>
                  <a href="#contact" className="plan_btn plan_btn_wiggle">
                    Arizangizni yuboring
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="plan_wrap"
        >
          <div className="plan_content">
            <div className="plan_img">
              <img src="https://www.chaqar.uz/img/flat-5.jpg" alt="" />
            </div>
            <div className="plan_desc">
              <h2>Xonadon N = 4</h2>
              <div className="plan_info">
                <p>5-15-qavatlar</p>
                <p>1-4 bino</p>
                <p>
                  96.26 m<sup>2</sup>
                </p>
              </div>
              <a href="#contact" className="plan_btn plan_btn_wiggle">
                Arizangizni yuboring
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Houses;
