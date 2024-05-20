import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
    Autoplay,
    Pagination,
  
    EffectCoverflow,
  
  } from "swiper/modules";
import "./home.css";
const Home = () => {
  return (
    <>
      <div>
      <div className="home">
       <div className="home_text_background">
        <span className="home_text_background_brand">ASTR<br/>IX</span>
        <span className="home_text_background_events">EVE<br/>NTS</span>

       </div>

       <div className="carousel_here">
       <div className="hme_ctr_7_jts_in_news_coverflow">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="img_jtsinNews"
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img_jtsinNews"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img_jtsinNews"
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img_jtsinNews"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
       </div>
      
      </div>

      
      </div>
     
    </>
  );
};

export default Home;
