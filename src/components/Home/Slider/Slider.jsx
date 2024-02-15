import styles from "./Slider.module.scss";
import cardData from "../../../utils/dataCards.json";
import { Slide } from "./Slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sliderr = () => {

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        //autoplay={{
          //delay: 3000,
          //disableOnInteraction: false,
        //}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={3}
        loop={true}
        breakpoints={breakpoints}
      >
        {cardData.map((card, index) => (
          <div key={index} className={styles.slideContainer}>
            <SwiperSlide key={index} style={{display: "flex", justifyContent: "center"}}>
              {" "}
              <Slide info={card} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export { Sliderr };
