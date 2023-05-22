import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carouselgoods() {
  return (
    <div>
        <p className="goodssub">영암축전 티셔츠, 고글, 수건은 <br />모든 학우분들께 무료제공됩니다.</p>
            
            <Carousel className="CarouselSizeGoods">
            <Carousel.Item interval={5000}>
                <div className="goodsContainer">
                    <div>
                        <img src="/img/tshirt_frontRe.png" alt="티셔츠 앞면" />
                        <p>티셔츠 앞면</p>
                    </div>
                    <div>
                        <img src="/img/tshirt_backRe.png" alt="티셔츠 앞면" /><br />
                        <p>티셔츠 뒷면</p>
                    </div>
                    <div>
                        <img src="/img/gogglesRe.png" alt="티셔츠 앞면" /><br />
                        <p>고글</p>
                    </div>
                    <div>
                        <img src="/img/towelRe.png" alt="티셔츠 앞면" /><br />
                        <p>수건</p>
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
  )
}

export default Carouselgoods