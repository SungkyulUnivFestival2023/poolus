import React from 'react';
import { BsStar } from "react-icons/bs";
import MenuData from'./MenuData.json';

function Allbooth() {
  return (
    <>
    {/* 부스 전체 리스트 렌더링 */}
    {MenuData.map((booth)=> (
    <section className="gardenbooth">
        <div className="flexbooth">
            <>                
            <div className="listImg">
            <img src="img/goggles.png" alt="부스이미지" />
            </div>
            <div className="boothlist">
                {/* 학과별 부스*/}
                <p className="boothtitle">{booth.department}</p>

                {/* 메뉴 */}
                <span className="boothmenu">
                {booth.menus.map((items)=> (
                    <>
                    {items.name},<span>  </span> 
                    </>
                ))}
                </span>
            </div>
            <BsStar className="star"/>
        </>
        </div>
    </section>
        ))}
    </>
  )
}

export default Allbooth