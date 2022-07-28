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
    <div className="mt-24 bg-neutral-900 py-12">
      <p className="text-center my-5 text-[#ffffff] text-xl md:text-xl font-semibold" >
        We helped over
      </p>
      <h2 className="text-center my-5 text-[#ffffff] text-3xl md:text-5xl font-semibold">
        85000+ people
      </h2>
      <p className="text-center my-5 text-[#b3b3b3] text-md md:text-lg tracking-wide" style={{fontWeight:300}}>
        to achieve their dream physique
      </p>
      {/* adding the review */}
      <div className="w-[95%] md:w-[60%] mx-auto flex">
        <Swiper
          spaceBetween={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={width > 1000 &&width<1200 ? 2 : width>1200?3:1}
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
