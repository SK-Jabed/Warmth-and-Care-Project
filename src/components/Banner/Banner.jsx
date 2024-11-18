import React from 'react';
import firstImage from "../../assets/Rectangle 1.png"
import secondImage from "../../assets/Rectangle 26.png"
import thirdImage from "../../assets/Rectangle 27.png"
import forthImage from "../../assets/Rectangle 28.png"

const Banner = () => {
    return (
      <div className='container w-full mx-auto'>
        <div className="carousel w-full mx-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={firstImage}
              className="w-full h-[650px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={secondImage}
              className="w-full h-[650px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={thirdImage}
              className="w-full h-[650px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={forthImage}
              className="w-full h-[650px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper"; // Import Autoplay module
// // import "swiper/swiper-bundle.min.css";
// import 'swiper/css';
// import 'swiper/css/autoplay'; // If using specific modules like autoplay
// import "swiper/swiper-bundle.min.css";


// const Banner = () => {
//   const images = [
//     "../../assets/Rectangle 1.png",
//     "../../assets/Rectangle 26.png",
//     "../../assets/Rectangle 27.png",
//     "../../assets/Rectangle 28.png", // Replace with actual paths to your images
//   ];

//   return (
//     <div className="w-full h-[500px] bg-gray-100">
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         spaceBetween={30}
//         slidesPerView={1}
//         className="h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;
