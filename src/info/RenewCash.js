import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

function RenewCash() {
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, []);
  
  return (
    <section className="fullbgB">
      <div className="RenewCash good">
        <div className="cashtitle">
          <Link to="/InfoMain">
              <IoIosArrowBack />리뉴 캐쉬
          </Link>
        </div>

        <div className="cashsub">
          <p>
            <span className="pink">RE:NEW 총학생회 인스타그램<br />
            팔로우</span> 후 이벤트 참여
          </p>
          <BsArrowDown />
          <p>
            진행후 <span className="green">'GARDEN ISLAND'</span>내에<br />
            총학생회 부스 방문
          </p>
          <BsArrowDown />
          <p>
            확인 절차 후 <span className="pinkbold">리뉴캐쉬</span> 수령
          </p>
        </div>

        <div className="cardflex">
          <div>
            <img src="img/renewcash/cash1.png" alt="day1" height="120" />
            <p>DAY1</p>
          </div>

          <div>
            <img src="img/renewcash/cash2.png" alt="day2" />
            <p>DAY2</p>
          </div>
        </div>

        <div className="cashalert">
          <span><AiOutlineCheck /> 축제 양일에 걸쳐 총 300장의 (하루 150장)<br />캐쉬를 배부할 예정입니다.<br /></span>
          <span><AiOutlineCheck /> 최대 4000원 한도 내에서 사용 가능합니다.<br /></span>
          <span><AiOutlineCheck /> 릴스 이벤트를 제외한 이벤트의 중복 수령은 불가능합니다.<br /></span>
          <span><AiOutlineCheck /> 1일차 수령자는 2일차에 중복 수령이 불가능합니다.<br /></span>
          <span><AiOutlineCheck /> 1일차 리뉴캐쉬는 2일차로 이월이 불가하니 <br />이점 참고 바랍니다.</span>
        </div>

      </div>
    </section>
  )
}

export default RenewCash