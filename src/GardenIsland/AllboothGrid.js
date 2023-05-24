import React from 'react';
import { BsStar } from "react-icons/bs";
import MenuData from'./MenuData.json';

function AllboothGrid() {
  return (
    <>
    {/* 부스 전체 리스트 렌더링 */}
    
    <section className="Ggardenbooth">
    {MenuData.map((booth)=> (
        <div className="Gflexbooth" key={booth.id}>
            <>                
            <div className="GlistImg">
                <img src="img/garden/boothimg.png" alt="부스이미지" />
            </div>
            <div className="Gboothlist">
                {/* 학과별 부스*/}
                <p className="Gboothtitle">{booth.department}</p>

                {/* 메뉴 */}
                <span className="Gboothmenu">
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
        ))}
    </section>
    </>
  )
}

export default AllboothGrid