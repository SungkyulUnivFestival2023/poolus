import React from 'react'
import './Info.css';
import { Link } from 'react-router-dom';

function InfoMain() {
  return (
    <section className="bginfo">
      <div className="InfoMain good">
        <section className="InfoMain1">
          <div className="InfoTitle">
            <span>공지사항</span>
          </div>
          <div>
            <img src="img/info/infoimg.png" alt="확성기아이콘" />
          </div>
        </section>

        <section className="InfoMain1">
          <div className="Infomenu">
            <Link to='/Studentdue'>
              <button>학생회비 납부 혜택</button>
            </Link>
          </div>

          <div className="Infomenu">
            <Link to="Renewcash">
              <button>리뉴 캐쉬</button>
            </Link>
          </div>

          <div className="Infomenu">
            <Link to="/Sns">
              <button>SNS 이벤트</button>
            </Link>
          </div>
          
        </section>
      </div>
    </section>
  )
}

export default InfoMain