"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function HomeBanner(props: any) {
  return (
    <Swiper
      loop={true}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper">
      {props.content.map((banner, index) => (
        <SwiperSlide key={banner.id}>
          <Link target="_blank" href={banner.url}>
            <Image
              className="w-full object-cover rounded-2xl"
              width="100%"
              alt={banner.image}
              src={banner.image}/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}