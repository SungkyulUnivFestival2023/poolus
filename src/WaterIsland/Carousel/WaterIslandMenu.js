import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Carouselgoods from './Carouselgoods';
import Carouselattraction from './Carouselattraction';


function GoodsCarousel({contents}) {
  return (
    <section className="display-container fullbgB">
      <div className="Goods good">
        <div>
          <Link to="/WaterIsland" className="attractionBtn">
            <IoIosArrowBack className="arrowback" size="20" color="black" />
            {contents === "attr" ? <span>어트랙션</span> : <span>매표소 (굿즈)</span>}
          </Link>
        </div>

        <div>
          <div className="waterIslandContents">
              {contents === "attr" ? <Carouselattraction /> : <Carouselgoods /> }
          </div>
        </div>
    </div>
    </section>
  )
}

export default GoodsCarousel