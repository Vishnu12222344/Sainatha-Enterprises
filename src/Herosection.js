import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ height: '60vh' }}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <div className="hero-overlay">
          <h1>TRY OUR NEW WINDOW DESIGNER</h1>
          <p>Committed To Delivering High Quality</p>
        </div>
        <Carousel.Caption>
          <p>Experience our innovative design process.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500} style={{ height: '60vh' }}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <div className="hero-overlay">
          <h1>QUALITY YOU CAN TRUST</h1>
          <p>Our products are crafted with precision and care.</p>
        </div>
        <Carousel.Caption>
          <p>Dedicated to excellence and precision.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '60vh' }}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <div className="hero-overlay">
          <h1>UNMATCHED DURABILITY</h1>
          <p>Built to withstand the test of time.</p>
        </div>
        <Carousel.Caption>
          <p>Reliability and strength you can depend on.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
