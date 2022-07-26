import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowSize from "../../hooks/windowSize";
const Review = () => {
  const { width } = useWindowSize();
  return (
    <div className="my-24 bg-neutral-900 py-12">
      <p className="text-center my-5 text-gray-100 text-xl md:text-3xl">
        We helped over
      </p>
      <h2 className="text-center my-5 text-gray-100 text-3xl md:text-5xl">
        85000+ people
      </h2>
      <p className="text-center my-5 text-gray-400 text-sm md:text-md">
        to achieve their dream physique
      </p>
      {/* adding the review */}
      <div className="w-[95%] md:w-[60%] mx-auto flex">
        <Swiper
          spaceBetween={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={width > 1000 ? 3 : 1}
          scrollbar={true}
        >
          <SwiperSlide>
            <Image src={"/review/1.png"} width={320} height={120} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/review/2.png"} width={320} height={120} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/review/3.png"} width={320} height={120} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/review/4.png"} width={320} height={120} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/review/5.png"} width={320} height={120} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"/review/6.png"} width={320} height={120} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
