import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Attrdetail from './Attrdetail';

function Attra({waterground}) {
  return (
    <section>
        <div className="diao fixed-top d-flex justify-content-center">
            <img src="img/black.png" alt="안돼" />
        </div>
        {/* 워터 그라운드  */}
        <section className="good attrflex" id="waterground">
            <div className="AttrComp">
                <div className="attrTitle">워터 그라운드</div>

                <div className="attrSub">
                    <p className="attrsubflex">
                    <span>이용시간</span> <IoIosArrowForward /> 
                    <span className="blueFont finisht">
                        <Attrdetail />
                    </span>
                    </p>
                    <p><span>이용요금</span> <IoIosArrowForward /> <span className="blueFont">2,000원</span></p>
                </div>
                
                <div className="groundRule">
                <p>1. 5:5조 편성 후 워터그라운드 경기장 양 끝에서 시작</p>
                <p>2. 좁아지는 경기장에서 한정된 물총과 물을 습득하며 경기 진행</p>
                <p>3. 상대편 참가자에게 부착된 종이의 전면을 사격하여 아웃 시킨다.</p>
                <p>4. 생존한 최후의 1인이 속한 팀이 우승!</p>
                </div>

                <div className="AttrImg">
                <img src="/img/waterGround.png" alt="waterGround" />
                </div>
                
                <div className="attrbtns">
                    <button><a href="#waterslide">워터 슬라이드</a></button>
                    <button><a href="#fulljang">대형 & 소형 풀장</a></button>
                </div>
            </div>
        </section>

        {/* 워터 슬라이드 */}
        <section className="good attrflex" id="waterslide">
            <div className="AttrComp">
                <div className="attrTitle">워터 슬라이드</div>

                <div className="attrSub">
                    <p className="attrsubflex">
                    <span>이용시간</span> <IoIosArrowForward /> 
                    <span className="blueFont finisht">
                        <Attrdetail />  
                    </span>
                    </p>
                    <p><span>이용요금</span> <IoIosArrowForward /> <span className="blueFont">2,000원</span></p>
                    <p><span>슬라이드 높이</span> <IoIosArrowForward /> <span className="blueFont">약 7-8m</span></p>
                    <p><span>소형풀장 수심</span> <IoIosArrowForward /> <span className="blueFont">약 0.7m</span></p>
                </div>

                <div className="AttrImg">
                    <img src="/img/waterSlide.png" alt="waterGround" />
                </div>

                <div className="attrbtns">
                    <button><a href="#waterground">워터 그라운드</a></button>
                    <button><a href="#fulljang">대형 & 소형 풀장</a></button>
                </div>
            </div>  
        </section>

        {/* 대형 & 소형 풀장  */}
        <section className="good attrflex" id="fulljang">
            <div className="AttrComp">
                <div className="attrTitle">대형&소형 풀장</div>

                <div className="attrSub">
                <p className="attrsubflex">
                    <span>이용시간</span> <IoIosArrowForward /> 
                    <span className="blueFont finisht">
                        <Attrdetail />
                    </span>
                    </p>
                    <p><span>이용요금</span> <IoIosArrowForward /> <span className="blueFont">2,000원</span></p>
                    <p><span>대형풀장</span> <IoIosArrowForward /> <span className="blueFont">수심 : 약 1.2m</span></p>
                    <p><span>소형풀장</span> <IoIosArrowForward /> <span className="blueFont">수심 : 약 0.7m</span></p>
                </div>

                <div className="AttrImg">
                    <img src="/img/fulljang.png" alt="waterGround" />
                </div>

                <div className="attrbtns">
                    <button><a href="#waterground">워터 그라운드</a></button>
                    <button><a href="#waterslide">워터 슬라이드</a></button>
                </div>
            </div>
        </section>
    </section>

    
  )
}

export default Attra