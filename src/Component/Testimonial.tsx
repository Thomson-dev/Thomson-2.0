
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";



const Testimonial = () => {
  return (
    <div className="lgl:px-8 px-5 py-6 mt-10">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        Testimonial
      </h2>
      <hr className="w-[8%] border-[1.4px]    border-green-500  " />

      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="mt-6">
              <FaQuoteLeft className="text-5xl text-green-500" />
              <p className="averia-serif-libre-semibold  max-w-full text-[#646464] mt-5  text-[1.5rem] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                nesciunt eveniet dolor aliquam ipsum eum blanditiis minus, a
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-6">
              <FaQuoteLeft className="text-5xl text-green-500" />
              <p className="averia-serif-libre-semibold  max-w-full text-[#646464] mt-5  text-[1.5rem] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                nesciunt eveniet dolor aliquam ipsum eum blanditiis minus, a
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-6">
              <FaQuoteLeft className="text-5xl text-green-500" />
              <p className="averia-serif-libre-semibold   text-[#646464] mt-5  text-[1.5rem] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                nesciunt eveniet dolor aliquam ipsum eum blanditiis minus, a
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-6">
              <FaQuoteLeft className="text-5xl text-green-500" />
              <p className="averia-serif-libre-semibold  max-w-full text-[#646464] mt-5  text-[1.5rem] leading-tight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                nesciunt eveniet dolor aliquam ipsum eum blanditiis minus, a
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
