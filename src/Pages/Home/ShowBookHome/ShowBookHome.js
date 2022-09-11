import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import useAuth from "../../../hook/useAuth";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ShowBookHome = ({ items, title }) => {
  const { URl } = useAuth();

  return (
    <div className="container">
      <h2 className="mb-4">{title}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide>
            <div class=" container">
              <div class="d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div class="product">
                  <img src={`${URl}${item.image}`} alt="" />
                  <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon">Add To Cart</li>
                    <li class="icon">
                      <Link to={`bookdetails/${item?.id}`}>Details</Link>
                    </li>
                  </ul>
                </div>
                <div class="tag bg-red">
                  {item?.discount_percent} % Discount
                </div>
                <div class="title pt-4 pb-1">{item.title}</div>
                <div class="d-flex align-content-center justify-content-center">
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                </div>
                <div class="price">$ {item.selling_Price}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShowBookHome;
