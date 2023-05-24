import React from 'react';
import { BsStar } from "react-icons/bs";
import MenuData from'./MenuData.json';

function Allbooth({searchword}) {
    // 메뉴 검색 필터링
    const filteredMenuItems = MenuData.filter((booth) =>
        booth.menus.some((item) =>
            item.name.includes(searchword)
        ));

    // 학과 검색 필터링
    const filteredDepartment = MenuData.filter((booth) =>
            booth.department.includes(searchword)
    );

  return (
    <>


    {/* 부스 전체 리스트 렌더링 */}
    {MenuData.map((booth)=> (
    <section className="gardenbooth" key={booth.id}>
        <div className="flexbooth">
            <>                
            <div className="listImg">
            <img src="img/garden/boothimg.png" alt="부스이미지" />
            </div>
            <div className="boothlist">
                {/* 학과별 부스*/}
                <p className="boothtitle">{booth.department}</p>

                {/* 메뉴 */}
                <span className="boothmenu">
                <>
                {/* 메뉴가 너무 많은 부스들이 있어서 메뉴 3개만 보이도록 */}
                    {booth.menus.slice(0, 3).map((items)=> (
                        <>
                        {items.name},<span>  </span> 
                        </>
                    ))} 등등
                </>
                </span>
            </div>
            <BsStar className="star"/>
        </>
        </div>
    </section>
        ))}


    {/* 검색된 부스 리스트 렌더링 */}
    {filteredMenuItems.map((booth)=> (
        <section className="gardenbooth" key={booth.id}>
            <div className="flexbooth">
                <>                
                <div className="listImg">
                <img src="img/garden/boothimg.png" alt="부스이미지" />
                </div>
                <div className="boothlist">
                    {/* 학과별 부스*/}
                    <p className="boothtitle">{booth.department}</p>

                    {/* 메뉴 */}
                    <span className="boothmenu">
                    <>
                    {/* 메뉴가 너무 많은 부스들이 있어서 메뉴 3개만 보이도록 */}
                        {booth.menus.slice(0, 3).map((items)=> (
                            <>
                            {items.name},<span>  </span> 
                            </>
                        ))} 등등
                    </>
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