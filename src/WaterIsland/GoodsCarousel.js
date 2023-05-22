import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function GoodsCarousel() {
  return (
    <section className="flexcontainer vhHeight">
      <div className="Goods">
        <Link to="/WaterIsland" className="attractionBtn">
          <IoIosArrowBack className="arrowback" size="20" color="black" />
          <span>어트랙션</span>
        </Link>


        <p className="goodssub">영암축전 티셔츠, 고글, 수건은 <br />모든 학우분들께 무료제공됩니다.</p>
        
        <Carousel className="CarouselSizeGoods">
          <Carousel.Item interval={5000}>
            <div>
                <div className="goodsContainer goodsContainer1">
                    <div>
                        <div>방수팩<br />3000원</div>
                    </div>

                    <div>
                        <img src="/img/packRe.png" alt="티셔츠 앞면" /><br />
                    </div>

                    <div>
                        <img src="/img/gun.png" alt="물총" /><br />
                    </div>
                    <div>
                        <div>물총<br />4000원</div>
                    </div>
                </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <div>
                
                <div className="goodsContainer goodsContainer1">
                    <div>
                        <div>방수팩<br />3000원</div>
                    </div>

                    <div>
                        <img src="/img/packRe.png" alt="티셔츠 앞면" /><br />
                    </div>

                    <div>
                        <img src="/img/gun.png" alt="물총" /><br />
                    </div>
                    <div>
                        <div>물총<br />4000원</div>
                    </div>
                </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
    </div>
    </section>
  )
}

export default GoodsCarousel