import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Nfree() {
  return (
    <>
        <div>
        <p className="goodssub">영암축전 티셔츠, 고글, 수건은 <br />모든 학우분들께 무료제공됩니다.</p>
        
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
    </>
  )
}

export default Nfree