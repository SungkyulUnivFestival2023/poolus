import React from 'react'

function Studentdue() {
  return (
    <section className="fullbgB">
        <div className="Studentdue good">
            <div className="duetitle">학생회비 납부 혜택</div>
            <div className="duesub">
                <p>
                    <span>학생회비 납부자</span><br />
                    납부자용 팔찌(어트랙션 5회 이용권)<br />
                    추가 어트랙션 이용 금액 1000원<br />
                    어트랙션 매직패스
                </p>
                <img src="img/info/yesdue" alt="납부자 팔찌" />
            </div>
            <div className="duesub">
                <p>
                    <span>학생회비 미납부자</span><br />
                    미납부자용 팔찌<br />
                    어트랙션 이용 금액 2000원<br />
                </p>
                <img src="" alt="" />
            </div>
            <p></p>
        </div>
    </section>
  )
}

export default Studentdue