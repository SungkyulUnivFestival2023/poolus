import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Sns.css';
import { RxChevronUp } from "react-icons/rx";
import { BsPinAngleFill } from "react-icons/bs";
import Nav from '../Nav';

function Sns() {
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, [clickCount]);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <>
    <Nav btncolor={"#FFC7C7"} classcolor={"pinkcolor"} imgurl={"pinklogo"}/>
    <div className="infodiao diao fixed-top d-flex justify-content-center"><img src="img/black.png" alt="안돼" /></div>
    <div className='display-container'>
      <section className="fullbgB bgstar" data-bs-spy="scroll" data-bs-target=".navbar-example">
        <div className="Sns good">
          <div className="snstitle navmargin">
            <Link to="/InfoMain" id="SNS">
              <IoIosArrowBack />SNS 이벤트
            </Link>
          </div>

          <div className="snsevent">
            <p>축제의 순간을 보다 의미있게 <br />기록하실 수 있도록
              RE:NEW 총학생회에서 <br /><span>인스타그램 이벤트</span>를 준비하였습니다.
            </p>
            <p>이벤트에 참여하시면 <br /> RE:NEW 총학생회가 준비한 <br />
              <span>'리뉴 캐쉬'</span>를 수령하실 수 있습니다.
            </p>
            <p>
              SNS 이벤트에 참여하시고 <br />보다 풍성한 축제를 즐기시길 바라겠습니다.
            </p>
          </div>

          <div className="snsbtns">
            <div>
              <a href="#Rls"><button>릴스 이벤트</button></a>
            </div>

            <div>
              <a href="#Renewung"><button>리늉이를 찾아라</button></a>
            </div>

            <div>
              <a href="#Fter"><button>필터 이벤트</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* 릴스 이벤트 */}
      <section id="Rls" className="fullbgB bgstar">
        <div className="Rls good">
            <div className="Rlstitle">
              <button onClick={handleButtonClick}>
                <RxChevronUp /> 릴스 이벤트
              </button>
            </div>

            <div className="eventexp">
                <p className="fontY">1. RE:NEW 총학생회 인스타그램 팔로우</p>
                <p className="fontB">2. 'POOL:US 릴스' 촬영</p>
                <p>3. RE:NEW 총학생회 계정 태그 후 <br />인스타그램 업로드</p>
                <p className="fontG">4. 이벤트 참여 후 <br />GARDEN ISLAND 총학생회 부스 방문</p>
                <p className="mar-b">5. 확인 절차 후 리뉴 캐쉬 수령 (양일 선착순 50명)</p>
                <p className="eventsm"><BsPinAngleFill />  릴스 이벤트를 제외한 이벤트의 중복 참여는 불가능합니다.</p>
                <p className="eventsm"><BsPinAngleFill />  EX: 릴스 + 필터 이벤트, 리늉이를 찾아라(O),<br />
                필터 이벤트 + 리늉이를 찾아라(X)</p>
            </div>

            <div className="baromove">
              <div>
                <a href="#Renewung"><button>리늉이를 찾아라</button></a>
              </div>

              <div>
                <a href="#Fter"><button>필터 이벤트</button></a>
              </div>
            </div>
        </div> 
      </section>

      {/* 리늉이를 찾아라 */}
      <section id="Renewung" className="fullbgB bgstar">
      <div className="Rls good">
            <div className="Rlstitle">
              <button onClick={handleButtonClick}>
                <RxChevronUp /> 리늉이를 찾아라
              </button>
            </div>

            <div className="eventexp">
                <p className="fontY">1. RE:NEW 총학생회 인스타그램 팔로우</p>
                <p className="fontB">2. '리늉이 에어풍선'과 함께 촬영</p>
                <p>3. RE:NEW 총학생회 계정 태그 후 <br />인스타그램 업로드</p>
                <p className="fontG">4. 이벤트 참여 후 <br />GARDEN ISLAND 총학생회 부스 방문</p>
                <p className="mar-b">5. 확인 절차 후 리뉴 캐쉬 수령 (양일 선착순 50명)</p>
                <p className="eventsm"><BsPinAngleFill />  릴스 이벤트를 제외한 이벤트의 중복 참여는 불가능합니다.</p>
                <p className="eventsm"><BsPinAngleFill />  EX: 릴스 + 필터 이벤트, 리늉이를 찾아라(O),<br />
                필터 이벤트 + 리늉이를 찾아라(X)</p>
            </div>

            <div className="baromove">
              <div>
                <a href="#Rls"><button>릴스 이벤트</button></a>
              </div>

              <div>
                <a href="#Fter"><button>필터 이벤트</button></a>
              </div>
            </div>
        </div> 
      </section>

      {/* 필터 이벤트 */}
      <section id="Fter" className="fullbgB bgstar">
        <div className="Rls good">
              <div className="Rlstitle">
                <button onClick={handleButtonClick}>
                  <RxChevronUp /> 필터 이벤트
                </button>
              </div>

              <div className="eventexp">
                  <p className="fontY">1. RE:NEW 총학생회 인스타그램 팔로우</p>
                  <p className="fontB">2. 'POOL:US 필터' 촬영</p>
                  <p>3. RE:NEW 총학생회 계정 태그 후 <br />인스타그램 업로드</p>
                  <p className="fontG">4. 이벤트 참여 후 <br />GARDEN ISLAND 총학생회 부스 방문</p>
                  <p className="mar-b">5. 확인 절차 후 리뉴 캐쉬 수령 (양일 선착순 50명)</p>
                  <p className="eventsm"><BsPinAngleFill />  릴스 이벤트를 제외한 이벤트의 중복 참여는 불가능합니다.</p>
                  <p className="eventsm"><BsPinAngleFill />  EX: 릴스 + 필터 이벤트, 리늉이를 찾아라(O),<br />
                  필터 이벤트 + 리늉이를 찾아라(X)</p>
              </div>

              <div className="baromove">
                <div>
                  <a href="#Rls"><button>릴스 이벤트</button></a>
                </div>

                <div>
                <a href="#Renewung"><button>리늉이를 찾아라</button></a>
                </div>
              </div>
          </div> 
        </section>
      </div>
    </>
  )
}

export default Sns