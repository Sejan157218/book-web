import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Card } from "react-bootstrap";


const RecentView = () => {
    return (
     
        <div className="container">
        <h2 className="mb-4">Category Name</h2>
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
      {Array.from({ length: 10 }).map((_, idx) => (
          <SwiperSlide>
     
     <div class=" container">
        <div class="d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon">Add To Cart</li>
                  
                </ul>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1">Winter Sweater</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 60.0</div>
        </div>
        </div>
    
          </SwiperSlide>
        ))}


  
        
      </Swiper>
    </div>
      
    );
};

export default RecentView;