import { useRef, useState } from "react";
import { Globe } from "react-feather";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="reviews-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            <div className="review">
              <div className="review-author-avatar bg-gradient">
                <img src={item.avatar} alt="" />
              </div>
              <h4 className="mb-2">{item.author}</h4>
              <h4 className="mb-2">{item.last}</h4>
              <p className="mb-4 text-[#666]">{item.organization}</p>
              <div
                className="review-rating mt-6 flex items-center justify-center space-x-2.5"
              >
                <Globe /> <b>Тэтгэлэг авсан сургуулиуд</b>
              </div>
              <br></br>
              <p>{item.content}</p>
              <p>{item.content2}</p>
              <p>{item.content3}</p>
              <p>{item.content4}</p>
              <p>{item.content5}</p>
              <p>{item.content6}</p>
              <p>{item.content7}</p>
              <br></br>
              <b>{item.scholarship}</b>
              <br></br>
              <p className="text-xl">{item.price}</p>
             
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;