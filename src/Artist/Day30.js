import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Artist.css';

function Day30() {
  return (
    <div>
        <Carousel className="artistcarousel">
        <Carousel.Item interval={5000}>
          <div className="artist">
            <img src="img/artist/locy.png" alt="" />
            <img src="img/artist/locyT.png" alt="" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="artist">
            <img src="img/artist/bolsa.png" alt="" />
            <img src="img/artist/bolsaT.png" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="artist">
            <img src="img/artist/subin.png" alt="" />
            <img src="img/artist/subinT.png" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="artist">
            <img src="img/artist/jina.png" alt="" />
            <img src="img/artist/jinaT.png" alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Day30