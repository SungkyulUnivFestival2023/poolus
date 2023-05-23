import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Artist.css';

function Day31() {
  return (
    <div>
        <Carousel className="artistcarousel">
      <Carousel.Item interval={5000}>
        <div className="artist">
          <img src="img/artist/10cm.png" alt="10cm" />
          <img src="img/artist/10cmT.png" alt="10cm" />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="artist">
          <img src="img/artist/unjjana.png" alt="언짜나이짜나" />
          <img src="img/artist/EZUZT.png" alt="EZUZ" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className="artist">
          <img src="img/artist/by.png" alt="비와이" />
          <img src="img/artist/byT.png" alt="비와이" />
        </div>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Day31