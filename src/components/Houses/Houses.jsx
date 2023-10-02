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
              // <div
              //   initial={{ opacity: 0, scale: 0.5 }}
              //   whileInView={{ opacity: 1, scale: 1 }}
              //   transition={{ duration: 1 }}
              //   viewport={{ once: true }}
              //   className="plan_wrap"
              // >
              //   <div className="plan_content">
              //     <div className="plan_img">
              //       <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
              //     </div>
              //     <div className="plan_desc">
              //       <h2>Xonadon N = 1</h2>
              //       <div className="plan_info">
              //         <p>5-15-qavatlar</p>
              //         <p>1-4 bino</p>
              //         <p>
              //           41.90 m<sup>2</sup>
              //         </p>
              //       </div>
              //       <a href="#contact" className="plan_btn plan_btn_wiggle">
              //         Arizangizni yuboring
              //       </a>
              //     </div>
              //   </div>
              // </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                id="house2__section"
                className="carousel slide house2_page"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#house2__section"
                    data-bs-slide-to="6"
                    aria-label="Slide 9"
                  ></button>
                </div>

                <div className="carousel-inner">
                  <div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="plan_wrap carousel-item active first-letter:teras__section"
                  >
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 1.1</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 1.2</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 1.3</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 2.1</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 2.2</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 2.3</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 4.1</h2>
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
                  </div>

                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 4.2</h2>
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
                  </div>
                  <div className="plan_wrap carousel-item first-letter:teras__section">
                    <div className="plan_content">
                      <div className="plan_img">
                        <img
                          src="https://www.chaqar.uz/img/flat-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="plan_desc">
                        <h2>Xonadon N = 4.3</h2>
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
                  </div>
                </div>

                <div className="house2_carousel_button_group">
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#house2__section"
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
                    data-bs-target="#house2__section"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          // <motion.div
          //   initial={{ opacity: 0, scale: 0.5 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   transition={{ duration: 1 }}
          //   viewport={{ once: true }}
          //   className="plan_wrap"
          // >
          //   <div className="plan_content">
          //     <div className="plan_img">
          //       <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
          //     </div>
          //     <div className="plan_desc">
          //       <h2>Xonadon N = 2</h2>
          //       <div className="plan_info">
          //         <p>5-15-qavatlar</p>
          //         <p>1-4 bino</p>
          //         <p>
          //           41.90 m<sup>2</sup>
          //         </p>
          //       </div>
          //       <a href="#contact" className="plan_btn plan_btn_wiggle">
          //         Arizangizni yuboring
          //       </a>
          //     </div>
          //   </div>
          // </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="house1__section"
            className="carousel slide house1_page"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#house1__section"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#house1__section"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#house1__section"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="plan_wrap carousel-item active first-letter:teras__section">
                <div className="plan_content">
                  <div className="plan_img">
                    <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
                  </div>
                  <div className="plan_desc">
                    <h2>Xonadon N = 1.1</h2>
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
              </div>
              <div className="plan_wrap carousel-item first-letter:teras__section">
                <div className="plan_content">
                  <div className="plan_img">
                    <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
                  </div>
                  <div className="plan_desc">
                    <h2>Xonadon N = 1.2</h2>
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
              </div>
              <div className="plan_wrap carousel-item first-letter:teras__section">
                <div className="plan_content">
                  <div className="plan_img">
                    <img src="https://www.chaqar.uz/img/flat-1.jpg" alt="" />
                  </div>
                  <div className="plan_desc">
                    <h2>Xonadon N = 1.3</h2>
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
              </div>
            </div>

            <div className="house1_carousel_button_group">
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#house1__section"
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
                data-bs-target="#house1__section"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </motion.div>
        )
      ) : bool ? (
        <AnimatePresence>
          {bool && (
            // <motion.div
            //   initial={{ opacity: 0, scale: 0.5 }}
            //   whileInView={{ opacity: 1, scale: 1 }}
            //   transition={{ duration: 1 }}
            //   viewport={{ once: true }}
            //   className="plan_wrap"
            // >
            //   <div className="plan_content">
            //     <div className="plan_img">
            //       <img src="https://www.chaqar.uz/img/flat-3.jpg" alt="" />
            //     </div>
            //     <div className="plan_desc">
            //       <h2>Xonadon N = 3</h2>
            //       <div className="plan_info">
            //         <p>5-15-qavatlar</p>
            //         <p>1-4 bino</p>
            //         <p>
            //           69.05 m<sup>2</sup>
            //         </p>
            //       </div>
            //       <a href="#contact" className="plan_btn plan_btn_wiggle">
            //         Arizangizni yuboring
            //       </a>
            //     </div>
            //   </div>
            // </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              id="house3__section"
              className="carousel slide house3_page"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#house3__section"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#house3__section"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#house3__section"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="plan_wrap carousel-item active first-letter:teras__section">
                  <div className="plan_content">
                    <div className="plan_img">
                      <img src="https://www.chaqar.uz/img/flat-3.jpg" alt="" />
                    </div>
                    <div className="plan_desc">
                      <h2>Xonadon N = 2.1</h2>
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
                </div>
                <div className="plan_wrap carousel-item first-letter:teras__section">
                  <div className="plan_content">
                    <div className="plan_img">
                      <img src="https://www.chaqar.uz/img/flat-3.jpg" alt="" />
                    </div>
                    <div className="plan_desc">
                      <h2>Xonadon N = 2.2</h2>
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
                </div>
                <div className="plan_wrap carousel-item first-letter:teras__section">
                  <div className="plan_content">
                    <div className="plan_img">
                      <img src="https://www.chaqar.uz/img/flat-3.jpg" alt="" />
                    </div>
                    <div className="plan_desc">
                      <h2>Xonadon N = 2.3</h2>
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
                </div>
              </div>

              <div className="house3_carousel_button_group">
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#house3__section"
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
                  data-bs-target="#house3__section"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        // <motion.div
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   whileInView={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 1 }}
        //   viewport={{ once: true }}
        //   className="plan_wrap"
        // >
        //   <div className="plan_content">
        //     <div className="plan_img">
        //       <img src="https://www.chaqar.uz/img/flat-5.jpg" alt="" />
        //     </div>
        //     <div className="plan_desc">
        //       <h2>Xonadon N = 4</h2>
        //       <div className="plan_info">
        //         <p>5-15-qavatlar</p>
        //         <p>1-4 bino</p>
        //         <p>
        //           96.26 m<sup>2</sup>
        //         </p>
        //       </div>
        //       <a href="#contact" className="plan_btn plan_btn_wiggle">
        //         Arizangizni yuboring
        //       </a>
        //     </div>
        //   </div>
        // </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="house4__section"
          className="carousel slide house4_page"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#house4__section"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#house4__section"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#house4__section"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="plan_wrap carousel-item active first-letter:teras__section">
              <div className="plan_content">
                <div className="plan_img">
                  <img src="https://www.chaqar.uz/img/flat-5.jpg" alt="" />
                </div>
                <div className="plan_desc">
                  <h2>Xonadon N = 4.1</h2>
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
            </div>
            <div className="plan_wrap carousel-item first-letter:teras__section">
              <div className="plan_content">
                <div className="plan_img">
                  <img src="https://www.chaqar.uz/img/flat-5.jpg" alt="" />
                </div>
                <div className="plan_desc">
                  <h2>Xonadon N = 4.2</h2>
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
            </div>
            <div className="plan_wrap carousel-item first-letter:teras__section">
              <div className="plan_content">
                <div className="plan_img">
                  <img src="https://www.chaqar.uz/img/flat-5.jpg" alt="" />
                </div>
                <div className="plan_desc">
                  <h2>Xonadon N = 4.3</h2>
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
            </div>
          </div>

          <div className="house4_carousel_button_group">
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#house4__section"
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
              data-bs-target="#house4__section"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Houses;
