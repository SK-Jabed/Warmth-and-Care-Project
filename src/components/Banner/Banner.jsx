import React from 'react';
import firstImage from "../../assets/Rectangle 1.png"
import secondImage from "../../assets/Rectangle 26.png"
import thirdImage from "../../assets/Rectangle 27.png"
import forthImage from "../../assets/Rectangle 28.png"
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Banner.css" // Custom styles if needed

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
      title: "Warm Winter Donations",
      description: "Your winter clothes can bring warmth to those in need.",
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/yW5qLbK/blankets-to-donate-jpg.webp",
        title: "Share the Warmth",
        description: "Every donation counts. Make a difference this winter.",
    },
    {
        id: 4,
        image: "https://i.ibb.co.com/5WfwpFP/clothing.webp",
        title: "Support Local Drives",
        description: "Help organize clothing drives in your area.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/GQcRTTK/clothes.jpg",
      title: "Volunteer to Help",
      description:
        "Join us to distribute winter clothing in local communities.",
    },
  ];

  return (
    <div className="bg-gray-50 container w-11/12 mx-auto mt-6 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        className="h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center bg-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
                <div className="max-w-lg bg-white bg-opacity-80 p-4 rounded-lg shadow-lg hidden md:block">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div> */}

            <div
              className="relative"
              data-aos="fade-up" // Animation type
              data-aos-duration="1500" // Custom animation duration
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center bg-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
                <div
                  className="max-w-lg bg-white bg-opacity-80 p-4 rounded-lg shadow-lg hidden md:block"
                  data-aos="fade-right" // Another animation type
                >
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

// export default Banner;
