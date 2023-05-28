import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Studentdue() {
  return (
    <>
    <Nav btncolor={"#FFC7C7"} classcolor={"pinkcolor"} imgurl={"pinklogo"} />
    <div className="infodiao diao fixed-top d-flex justify-content-center">
        <img src="img/black.png" alt="안돼" />
    </div>
    <section className="fullbgB bgstar display-container">
        <div className="Studentdue good">
            <div className="duetitle navmargin">
                <Link to="/InfoMain">
                    <IoIosArrowBack />학생회비 납부 혜택
                </Link>
            </div>

            <div className="yesduesub">
                <p>
                    <span>학생회비 납부자</span><br />
                    <AiOutlineCheck /> 납부자용 팔찌(어트랙션 5회 이용권)<br />
                    <AiOutlineCheck /> 추가 어트랙션 이용 금액 1,000원<br />
                    <AiOutlineCheck /> 어트랙션 매직패스
                </p>
                <img src="img/info/yesdue.png" alt="납부자 팔찌" />
            </div>

            <div className="noduesub">
                <p>
                    <span>학생회비 미납부자 </span><br />
                    미납부자용 팔찌 <AiOutlineCheck /> <br />
                    어트랙션 이용 금액 2,000원 <AiOutlineCheck /> <br />
                </p>
                <img src="img/info/nodue.png" alt="미납부자 팔찌" />
            </div>
            <p className="dueAlert">
            <span className="pinkbold">학생회비 납부</span>는<br />
            <span className="pinkbold">학생회관 201호 총학생회실</span>에서 납부 가능합니다.<br/><br/>
            <span className="alt pink"><FiAlertCircle /> 축제 당일 학생회비 납부는 불가합니다.</span>
            </p>
        </div>
    </section>
    </>
  )
}

export default Studentdue