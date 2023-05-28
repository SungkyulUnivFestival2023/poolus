import React from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Goods() {
  return (
    <section>
        <div className="diao fixed-top d-flex justify-content-center">
            <img src="img/black.png" alt="안돼" />
        </div>
        <section className="good goodsflex" id="goods">
            <div className="AttrComp">
                <div className="attrTitle">굿즈</div>
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

                <p className="goodssub">영암축전 티셔츠, 고글, 수건은 <br />모든 학우분들께 무료제공됩니다.</p>

                <div className="goodsbtn">
                    <button><a href="#pricegoods"><MdKeyboardDoubleArrowDown size="20" /> 판매 물품 보러가기</a></button>
                </div>  
            </div>  
        </section>


        <section className="good goodsflex" id="pricegoods">
            <div className="AttrComp">
                <div className="attrTitle">판매 물품</div>
                <div className="pricegood">
                    <div className="goodsContainer goodsContainer1">
                        <div>
                            <div>방수팩<br />3,000원</div>
                        </div>

                        <div>
                            <img src="/img/packRe.png" alt="티셔츠 앞면" /><br />
                        </div>

                        <div>
                            <img src="/img/gun.png" alt="물총" /><br />
                        </div>
                        <div>
                            <div>물총<br />3,000원</div>
                        </div>
                    </div>
                </div>
                <div className="goodsbtn">
                    <button><a href="#goods"><MdKeyboardDoubleArrowUp size="20" /> 굿즈 물품 보러가기</a></button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Goods