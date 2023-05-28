import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Attrdetail() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1일차 : 10:00 ~ 17:00</Accordion.Header>
        <Accordion.Body>
            <p>1타임 : <span>10:00 ~ 12:00</span><br /></p>
            <p>수질 관리 : <span>12:00 ~ 13:00</span><br /></p>
            <p>2타임 : <span>13:00 ~ 14:30</span><br /></p>
            <p>수질 관리: <span>14:30 ~ 15:00</span><br /></p>
            <p>3타임 : <span>15:00 ~ 17:00</span><br /></p>
            <p>종료<br /></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2일차 : 10:00 ~ 19:00</Accordion.Header>
        <Accordion.Body>
            <p>1타임 : <span>10:00 ~ 12:00</span><br /></p>
            <p>수질 관리 : <span>12:00 ~ 13:00</span><br /></p>
            <p>2타임 : <span>13:00 ~ 15:00</span><br /></p>
            <p>수질 관리: <span>15:00 ~ 16:00</span><br /></p>
            <p>3타임 : <span>16:00 ~ 19:00</span></p>
            <p>종료<br /></p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Attrdetail