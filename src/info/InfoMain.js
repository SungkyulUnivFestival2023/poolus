import React from 'react'
import './Info.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function InfoMain() {
  return (
    <>
    <Nav btncolor={"#FFC7C7"} classcolor={"pinkcolor"} />
    <section className="display-container fullbgB bgstar">
      <div className="InfoMain good InfoMain1">
          <div className="InfoTitle">
            <span>공지사항</span>
          </div>

          {/* 확성기 */}
          <div className="infoimg">
            <img src="img/info/infoimg.png" alt="확성기아이콘" />
          </div>
          
          <div className="InfoMain1">
            <div className="Infomenu">
              <Link to='/Studentdue'>
                  <button>학생회비 납부 혜택</button>
              </Link>
            </div>

            <div className="Infomenu">
              <Link to="/Renewcash">
                  <button>리뉴 캐쉬</button>
              </Link>
            </div>

            <div className="Infomenu">
              <Link to="/Sns">
                  <button>SNS 이벤트</button>
              </Link>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoMain