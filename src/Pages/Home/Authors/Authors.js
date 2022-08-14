import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "react-bootstrap";

const Authors = () => {
    return (
        <div className="container my-5 border">
            <h2 className="my-4">Authors</h2>
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
     
            <Card className="border-0">
              <Card.Img style={{width:'200px',height:'200px',borderRadius:'50%'}} className="mx-auto py-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAVMjzermPCzgTn-pczbMp92eujweyPNvaQ&usqp=CAU" />
              <Card.Body>
                <Card.Title className="text-center">Authors Name</Card.Title>
                
              </Card.Body>
            </Card>
    
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
      
    );
};

export default Authors;