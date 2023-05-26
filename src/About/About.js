import React from 'react'
import './about.css';
import { FaHandshake } from "react-icons/fa";
import Person0 from './Person0';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>  <Helmet>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Helmet>
        <div className='display-container about-p'>
            <div className="About">
                <div className="pooluslogo"><img src="img/logo/heartlogo.png" alt="정식로고" /></div>
                {/* <div className="pooluslogo1 mar"><img src="img/logo/waterpoolus.png" alt="로고글씨" /></div> */}
                <div className="pooluslogo2 ">만든이들</div>
                
                {/* <div className="logoX">
                    <div>
                        <img className='likelion-logo' src="img/logo/likelion.png" alt="멋사로고" />
                        <span class="llblue">성결대학교<br/>멋쟁이사자처럼 11기</span>
                    </div>
                    <span><FaHandshake /></span>
                    <div>
                        <img className='renew-logo' src="img/logo/renewlogo.png" alt="리뉴로고" />
                        <span className="renewyellow">RE:NEW<br/>총학생회</span>
                    </div>
                </div> */}
                <div className="logoX">
                    <div className='sku-likelion'>
                        <img className='likelion-logo' src="img/logo/likelion.png" alt="멋사로고" />
                        <span class="llblue">성결대학교<br/>멋쟁이사자처럼 11기</span>
                    </div>
                    <div className='sku-renew'>
                        <img className='renew-logo' src="img/logo/renewlogo.png" alt="리뉴로고" />
                        <span className="renewyellow">RE:NEW<br/>총학생회</span>
                    </div>
                    <lottie-player src="https://assets1.lottiefiles.com/temp/lf20_wsi9DZ.json" background="transparent" speed="1" style={{ width: '200px', height: '200px' }} loop autoplay></lottie-player>
                </div>

                <p className="collaboration">
                    성결대학교 제39대 RE:NEW 총학생회에서 축제를 기획하였습니다.<br />
                    성결대학교 멋쟁이사자처럼 대학 11기에서 웹 사이트를 제작하였습니다.
                </p>
            </div>

            <div className="people">
                <div className="renew">
                    <div className="pertitle">
                        <img className="smlogo1" src="img/logo/renewlogo.png" alt="리뉴로고" />
                        <div className='renewyellow'>RE:NEW 총학생회</div>
                    </div>
                    <Person0 id={1}/>
                </div>

                <div className="likelion">
                    <div className="pertitle">
                        <img className="smlogo" src="img/logo/likelion.png" alt="멋사로고" />
                        <div className='llblue'>성결대학교 멋쟁이사자처럼 11기</div>
                    </div>
                    <div className="gridpeople">
                        <Person0 id={2}/>
                        <Person0 id={4}/>
                        <Person0 id={3}/>
                        <Person0 id={5}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About