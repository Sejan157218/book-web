import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return (
       <div className='container my-5'>
         <Carousel slide={false}>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkdGHm6XRP03tlp2q6U2qmKMhylJFZR2i4XpKnG3fRN7DlfU5cPPUNZ7803tEDPT9wpQ&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXqW6XWVsrU2KHwFenJU7aQVBBcOPn1jHTO3C5f57zT_g6F_ecKlNbP1Kdk5c68fJsLc&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBt38TYFETJ1ReC0GsoYVDLKooVyZMyObEzzp2kyO-Dm1FHozQ_OO9U48NdtbZ_0sn-Kg&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
    );
};

export default Banner;